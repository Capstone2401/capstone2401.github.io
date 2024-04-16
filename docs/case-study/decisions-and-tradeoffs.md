---
sidebar_position: 4
---
# Design Decisions and Tradeoffs
Many decisions needed to be made over the course of designing and creating DataLoaf. This section covers the five most impactful decisions. Each discussion covers the problems that needed to be solved, the solution that was chosen and why, and looks at alternatives and why they weren't used. 

(Goal: engineering challenges. Summary of the challenges. Contextualize the next discussions.)

## Design of the Database
There were two problems that needed to be solved when designing the database: 

- Determine what type of database would be a best fit for DataLoaf's needs. 
- Determine what kind of schema that the database would use. 

### Choosing the Database Type 
When determining which type of database we'd use, it was important to consider what we would use the database for. Earlier, we covered how _aggregation types_ are an important part of forming questions to ask the data. We also need to associate events with the users that triggered them. This makes relational databases a natural place to start. We could store events and users in separate tables. From there, SQL provides the features we need to JOIN those tables and make aggregate calculations directly through queries.

While doing research for existing product analytics platforms, we found that columnar databases were the type of database most commonly used when doing any kind of analytics. Backing that up, we found that PostHog uses ClickHouse, which is columnar. But why? What features make columnar databases even more suitable for analysis than relational databases? More importantly, would those reasons line up with what we needed for DataLoaf? 

Columnar databases are conceptually similar to relational databases, so their advantages aren't readily apparent. The main difference is how a record is formed. In a columnar database, values are collected into records by column instead of by the relational database's row. But why is that significant? 

[TODO; figure comparing relational to columnar database storage structures]

In a relational database, each record represents all of the information about an entity. For example, if we were representing an event in a relational database, each record would have values in the `event_name`, `user_id`, and `event_attributes` columns. A single event would be made up of a value from these columns, such as: `"watch video"`, `349520` and `{region: "Alaska"}`. Another event entry could be: `"like video"`, `921516` and `{device: "Android", video: 1025101}`.

In a columnar database, a record is collected from all of the information in a single column. An example record of all the values for `event_name` would be `"watch video"`, `"like video"`, `"watch video"` and `"watch video"`.

This difference is enormous when the goal is to perform calculations. Looking at the question posted some sections back: "How many videos were watched in the last week?" To get that set of numbers, a relational database would have to look at all of the rows in its `events` table, group the rows that had a value of `"watch video"` for its `event_name` by the date they were watched, then count the total number of rows in those groups. However, in a columnar database, only two rows need to be looked at before it can start summing all of the `"watch video"` entries by their associated watch date: `event_namede` and `event_created`. 

This is why columnar databases are so powerful for analytics: because aggregation queries need to retrieve fewer records. In our use case, where we could have hundreds of thousands of events, retrieving only two records instead of a majority of the records is a huge benefit. 

So, we've justified the decision of using a columnar database instead of a relational database. Which columnar database should we use? We quickly found Amazon Redshift as a possible solution. Amazon Redshift is a columnar database that's built on top of PostgreSQL and accepts SQL queries. (Possible TODO; extra explanation around why building columnar databases on top of a relational database is so common - because Redshift isn't the only one that does this.)

Even though Redshift seems like a great solution, there are some drawbacks to choosing it. While columnar databases addresses our desire to make aggregated queries, calculating the aggregations at the query level isn't our only option. We could grab all of the necessary data and do the calculations programmatically at the application level (a choice that is explored in a later section). 

Additionally, columnar databases have a disadvantage to relational databases when it comes to the CRUD operations beyond 'read.' They've got worse performance for create and update which are important operations to DataLoaf (possible TODO; explain why if it's not self-evident from previous context). It's highly likely that a larger number of people will be using the application concurrently (and therefore generating events) than there will be people that are curious about the application's engagement. 



## Server-Side SDK vs Client-Side SDK

The details of all product analytics platforms are different, but most of them have a consistent method for collecting and visualizing data. 

[figure that illustrates the collection of event data. Maybe rows in a table of example events]

The kind of data that's collected is split into two categories: _event_ data and _user_ data. User data is tracked because it can be helpful to associate an event with a specific user. Doing so results in a broader range of questions that you can ask about how users are interacting with your application, and we'll cover how that works in a bit. First, let's define some terminology.

An event represents an action that a user took. An 'action' can be anything, from common tasks like signing in on an account to more specialized tasks like playing a video or adding an item to a cart. 

Events and users can have _attributes_ associated with them. These are values that help narrow into more specific questions about how users interact with the application. 

When implementing a platform, it's important to design the range of _metrics_ that you want to know. A metric is a value that represents the answer to your question over some range of time. An example would be "how many people made new accounts across the last four months?" You can observe the trend that maybe your signup rate is doubling every month, indicating a wonderful rate of growth. (need to re-write this - the connection between the term 'metric' and the question that's posed isn't clear.)

Data is collected through a software development kit (SDK) that can be imported into new or existing application code. SDKs can be client-side or server-side. The main difference between the two is where they gather data from. 

Client-side SDKs are considered to be a little more unreliable, because add-blockers and other browser settings or add-ons can sometimes block the full range of events from being set, but they allow for a more automated type of collection system that takes less work to set up. 

Server-side SDKs will collect 100% of the events that you want to track. However, they're more work to set up, as you need to manually define the event and user data across your back-end server. DataLoaf's SDK is a server-side package for Node.js back-ends. We'll explore its details in a bit. 

Once data is collected, it's put in some sort of permanent storage. Each platform has a different storage solution, but they all serve the same purpose: to act as a home for your data until you wish to visualize it through _trends_. A trend is some sort of graph that displays the metric over some period of time, and commonly takes the form of a bar or line graph. 

[figure that shows an example of a metric from PostHog]

(A description of the figure and how to read its trends.)
(A description of the interface and what each part of it means; including events, users and attributes. Specifically mention that each platform usually uses a different name for events, users and attributes.) 

---

The kind of data that's collected is split into two categories: _event_ data and _user_ data. User data is tracked because it can be helpful to associate an event with a specific user. Doing so results in a broader range of questions that you can ask about how users are interacting with your application, and we'll cover how that works in a bit. First, let's define some terminology.

An event represents an action that a user took. An 'action' can be anything, from common tasks like signing in on an account to more specialized tasks like playing a video or adding an item to a cart. 

Events and users can have _attributes_ associated with them. These are values that help narrow into more specific questions about how users interact with the application. 

The most important thing about a product analytics platform is that it helps answer questions that you have about how users interact with your product. 

For example, two question you might have are "how many people watched a video yesterday?" or "how many unique users watched a video yesterday?" These questions follow a pattern that you can use to determine what kinds of data you want to track in your application. 

The first thing to notice about these questions is that there is an action that you can turn into an event: "watch a video" 

---
Choosing a Database
What kind of database was the most important decision that we would need to make. This decision also had a trickle effect on many of the other decisions that were made while creating DataLoaf. 

While doing research for existing product analytics platforms, we found that columnar databases were the type of database most commonly used when doing any kind of analytics. Backing that up, we found that PostHog uses ClickHouse as its database, which is columnar. But why? What features made them highly suitable for analysis? More importantly, would those reasons line up with what we needed for DataLoaf?

Columnar databases are conceptually similar to relational databases, so their advantages aren't readily apparent. The main difference is how data is associated. In a columnar database, values are collected by column instead of by row. But what does that really mean? 

In a relational database, each record represents all of the information about an entity. If we were representing an event in a relational database, each record would have values in the `event_name`, `user_id`, and `event_attributes` columns. A single event would be made up of a value from these columns, such as `"watch video"`, `349520` and `{region: "Alaska"}` or `"like video"`, `921516` and `{device: "Android", video: 1025101}`. 

In a columnar database, a record is made up of a different set of values. An example record of all the values for `event_name` would be `"watch video"`, `"like video"`, `"watch video"`, `"watch video"`. 

This difference is enormous when your goal is to perform calculations. Let's look at the question we posed a few sections back: "How many videos were watched in the last week?" To get that set of numbers, a relational database would have to look at all of the rows in its `events` table, group the rows that had a value of `"watch video"` for its `event_name` by the date they were watched, then count the total number of rows in those groups. However, in a columnar database, _only two rows need to be looked at_ before it can start summing all of the `"watch video"` entries by their associated watch date. 

This is why columnar databases are so powerful for analytics: because they need to retrieve fewer records before the calculation (the aggregation) can be performed. 

So, we've justified the decision of using a columnar database instead of a relational database. Which columnar database should we use? 

Once this decision had been made, we quickly found Amazon Redshift as a possible solution, a columnar database that's built on top of Postgres and accepts SQL queries. But there were other aspects to consider before we could decide if this would be our final solution. 

(TODO; cover other Amazon databases and why we turned them down, including Redshift's huge storage capacity and other advantages that columnar databases offer...?)

The second most important decision to be made around our database was the schema that it would use. 

(TODO; complete discussion around how we settled on the `attributes` structure)

- we considered an ec2 instance or a microservices structure.
- Intermediary lambda allows for decoupling between the SDK and delivery stream. Without it, the SDK would have to directly send the format that Firehose expects. This lets users develop and implement their own infrastructure if they choose to, so long as it has a URL endpoint that accepts HTTPS requests.

- What the problem was
  - We needed infrastructure that would host the full stack application
  - We needed to support HTTPS
- What the solution was
  - We went with a load balancer to use Amazon Certificate Manager. 
  - We went with an EC2 instance and Nginx / App Docker containers.
    - Nginx serves the front-end, which is a single page app.
    - App Docker container runs our back-end Express server. 
- What the alternatives were
  - Serving the front-end from a CDN. Decided against it because:
    - we didn't want to add the cost of more infrastructure if it wasn't necessary
    - How did we justify the lack of CDN? People in companies that are spread over the world will have latency when accessing the front-end. Because this application is not expected to be used outside of a company, and because the Redshift cluster has to live in a specific region (thereby extending latency from queries if we're far away), it didn't matter if the initial load of the front-end app was a bit faster due to being geographically closer. 
  - Serving the front-end from an S3 bucket. Decided against it because: 
    - I don't remember why. 
  - Setting up TLS certificate through Nginx. Decided against it because: 

----
