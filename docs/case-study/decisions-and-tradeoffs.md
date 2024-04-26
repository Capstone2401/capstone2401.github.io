---
sidebar_position: 4
---
# Justification of Design Decisions and Their Tradeoffs
This section covers the five most impactful design decisions in DataLoaf’s creation. Each discussion covers the problems that needed to be solved, the solution that was chosen and why it was chosen over alternatives.

## Tradeoffs of the Database Type
Our use case required a database that could handle event storage and user associations effectively. There also needed to be a way to perform analytical queries on the data. When considering different options, relational databases were a natural starting point.

Relational databases organize data into tables with rows and columns. Each row typically represents a single entity known as a record. All of the data related to that entity is stored within the row. This is also how the data is stored internally. This structure is intuitive and efficient for transactional operations and relational queries, where data is typically accessed row by row.

While relational databases can suffice for analytics workloads, a superior alternative exists. Columnar databases, such as Amazon Redshift and ClickHouse, are similar in many ways to relational databases, often being built on top of them. But there is one key difference. columnar databases internally store data based on the columns in a table. This means that aggregations can be performed by reading only columns required for the calculation. This minimizes the amount of data that needs to be accessed and processed in comparison to relational databases.

Other optimizations are made possible by this design, such as:
- the ability to compress individual columns based on their data type
- leveraging SIMD instructions for parallelizing computations on column aggregations

There are limitations of columnar databases, such as inferior write performance compared to many relational databases. This results from the need to access many columns when writing to the database. While still a tradeoff, batching strategies can alleviate this issue. Our data delivery strategy aims to accomplish this.

Ultimately, Amazon Redshift  was chosen due to its columnar storage, as well as its seamless integration with other AWS services. It provides the robustness and familiarity of Postgres, as well as analytics focused optimizations.

## Tradeoffs of the Database Schema
While the database schema is fairly straightforward, there were some challenges that came up. Choosing to store events and users in one table each was a simple decision. Likewise, columns like `event_name` and `user_id` were also easy choices. The complicated part was determining how to store event and user attributes so that filters could be applied at the query level.

Discussions were had around dynamically inserting new columns as new custom properties were defined, but this is a complicated solution. Platforms like Amplitude take this approach, but additional processing and infrastructure would be required on data collection to facilitate such a system. In the spirit of not overcomplicating the ingestion pipeline, we looked at other solutions.

Attributes are passed through the data pipeline as stringified JSON objects. They can contain an arbitrary number of key-value pairs whose values are not predetermined. They are then stored directly as JSON in Redshift, using its built in SUPER data type, which is used for unstructured data.

This approach simplifies storage, but complicates retrieval. When a query that requires filtering is made, aggregations become more complicated to perform. This is because comparisons between a collection of filters and the unstructured attributes for a user/event become necessary. While Redshift provides certain functions for accessing keys on a SUPER data type, they are naïve and are not suitable for the comparisons needed. Instead, a custom Python user defined function (UDF) was used to solve this problem.

The function does an evaluation between the filters selected in the DataLoaf UI and attributes on a given event or user. If a user/event’s attributes satisfy all filtered selections, it is included in the result. As a result, we were able to implement filtering at the database level, simplifying the amount of processing needing to be done on the application server.

## Tradeoffs of the Data Collection Pipeline
When thinking about how to get the data from the application to the Redshift database, we need to account for two key types of data in our pipeline: new data and update data. 

New data generated from the SDK is not sent in a form that's ready to be delivered directly to Redshift. We chose to leverage AWS Lambda to perform the processing that's needed to get our data in the shape needed for storage. However, there were tradeoffs for this decision. AWS Lambda functions have a limit of 1,000 concurrent invocations, which means that we can only ingest 1,000 new pieces of data at a time. Also, if we neared that limit, the performance of our pipeline would degrade as the service would not be able to handle any additional incoming traffic until a running function finishes its execution. While this is a limitation, with our use case being for small to medium sized companies, AWS Lambda functions seem to be a good choice to handle the anticipated traffic volume.

Once a piece of new data has been processed through the Lambda function, we needed to decide how it would be delivered to Redshift. Ideally, we want something that would allow us to constantly send information without significant delay. For this task, we decided to use Amazon Data Firehose. This infrastructure component is a fully managed data delivery pipeline that enables our infrastructure to move data from the AWS Lambda function to Redshift. Firehose sends the information to an AWS S3 bucket, which acts as an intermediary container for the data before it gets copied over to Redshift. 

One benefit to this is that Firehose batches data. This means that it will wait for a certain threshold to be met (either time or volume of data) and send all of the data together to be stored into S3. From there, the batched data will be copied from S3 into Redshift in one transaction. This means that each piece of new data doesn't have to be inserted into Redshift one record at a time, significantly offsetting the discussed downsides of columnar databases. Another benefit to using these S3 buckets in combination with Firehose is that it allows us to perform retries. If the transaction fails, Firehose will initiate another try after five minutes, and will continue to retry until the data has been successfully copied.

One big tradeoff to using Firehose is that it has a throughput limit of 2,000 transactions per second. Again, since DataLoaf is intended for small to medium sized applications, we felt that this amount of throughput would be justifiable and doesn’t require us to add more complexity to our infrastructure for unnecessary throughput gains.

The second type of data that we wanted to handle within the applications pipeline was update data. Since this is a fundamentally different type of data, we decided to set up a second path within the pipeline to help facilitate updates. We again needed to consider both the processing and delivery of the data to the database. When considering our processing infrastructure, we decided upon another AWS Lambda function. Just as it was used for the new data path, it allows us to do the repackaging needed to shape the data in the appropriate way for insertion to the database. For delivery, we decided not to add an additional piece of infrastructure and instead write the update directly from the Lambda function. This reduces the overall complexity of the pipeline and allows for updates to happen instantly within the function.
