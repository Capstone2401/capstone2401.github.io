---
sidebar_position: 3
---

# Tour of DataLoaf
DataLoaf can be mentally divided into three sections: 


![](https://lh7-us.googleusercontent.com/7mNAtxZa65qAZr8OYFuTeCTdQOPKtIwzdCqSNdbzmHVNtfNVrbmC9kXPKZu2XotztESsjixH4YoUtSfgcwBEKle7ztQ14M1A0UlN_U7I6gmKQbLtXCnxtVHFc7SY-0UL7vDOzRYrG1WcWB0i)
- Data collection
- Data storage
- Data visualization

Data collection is handled by a combination of the SDK and the infrastructure that moves that data into the database. Data storage is the database itself and is the most impactful decision that was made while designing DataLoaf. Data visualization encapsulates the remaining infrastructure and a full-stack application that's used visualize the data that answer company questions. 

The infrastructure is deployed to an existing AWS account from the provided CLI tool. Most of this process is totally automated, with the exception of some manual steps that are needed to finish enabling HTTPS for the full-stack application. Something else that's required to deploy the infrastructure is a domain name that the company owns. This domain name is used to access the full-stack application (which will be called the "insights application" for the rest of the case study). 

The SDK is an npm package for a Node.js-based back-end server application. It can be imported just like any other npm package and is connected to your AWS infrastructure through a URL that is output after deploying with the CLI. The insights application is hosted by an AWS Elastic Compute Cloud (EC2) instance. 

The point of this section is to set context by exploring details about the infrastructure and the role of the SDK and insights application in the context of the rest of the infrastructure. 

### Details About the Infrastructure
Event and user data are sent from the SDK to an AWS API Gateway. The API Gateway forwards this information to one of two AWS Lambda functions. One function is responsible for processing new entries and the other handles updates to existing entries. Event data is immutable, so only user attributes can be updated. 

The AWS Lambda function that processes new data will format and forward the data to one of two Amazon Data Firehose streams. Events go to one Firehose instance and users to go the other. Each Firehose stream will send their data to respective Amazon Simple Storage Service (S3) buckets. Event data is collected in one bucket and user data is collected in a second bucket. From there, the data is batch-copied to the database in a single transaction, which happens once every three minutes. 

Amazon Redshift is the database that was chosen. There are two tables that are created when the infrastructure is being provisioned with the CLI tool. One `events` table and one `users` table. 

The `events` table has five columns: 
- `event_id` to uniquely identify the event from the set
- `event_name` is the name given to the event in the company's application
- `user_id` is the ID of the user who was associated with the event 
- `event_created` is a timestamp when the event was triggered
- `event_attributes` is a JSON object that contains the key-value attributes sent with the event

The `users` table has two columns: 
- `user_id` is the ID of the user's profile
- `user_attributes` is a JSON object that contains the key-value attributes associated with the user

The infrastructure of the data visualization component is made of two pieces: An AWS Elastic Load Balancer (ELB) and an Amazon Elastic Cloud Computer (EC2) instance. The ELB is used to interface with the Amazon Certificate management service to issue a TLS certificate to the provided web domain during the infrastructure deployment. It's also used to forward requests that are made to that domain to the EC2 instance. 

The EC2 instance hosts the back and front-ends of the insights application. A Docker container of Nginx is used as a web server that serves the React front-end application. It also forwards requests to the Express back-end. The express back-end is built into its own Docker container during the infrastructure deployment. 

All requests from the insights application are handled by the back-end. When a change is made to the selections on the front-end for creating an insights graph, a request containing that information is sent to the back-end. Aggregated calculations are performed when the back-end queries the Redshift database.
### Insights Application for Data Visualization
(Intended content: information about the interface of our insights application with screenshots. Cover the features that we supported, including custom events, which aggregation types, filters and date ranges.)

