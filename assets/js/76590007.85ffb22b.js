"use strict";(self.webpackChunkdataloaf=self.webpackChunkdataloaf||[]).push([[9350],{5573:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var n=a(4848),s=a(8453);const o={sidebar_position:4},i="Design Decisions and Tradeoffs",r={id:"case-study/decisions-and-tradeoffs",title:"Design Decisions and Tradeoffs",description:"Many decisions needed to be made over the course of designing and creating DataLoaf. This section covers the five most impactful decisions. Each discussion covers the problems that needed to be solved, the solution that was chosen and why, and looks at alternatives and why they weren't used.",source:"@site/docs/case-study/decisions-and-tradeoffs.md",sourceDirName:"case-study",slug:"/case-study/decisions-and-tradeoffs",permalink:"/docs/case-study/decisions-and-tradeoffs",draft:!1,unlisted:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/case-study/decisions-and-tradeoffs.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Tour of DataLoaf",permalink:"/docs/case-study/tour-of-dataloaf"},next:{title:"Future Work and Conclusion",permalink:"/docs/case-study/future-work"}},d={},c=[{value:"Design of the Database",id:"design-of-the-database",level:2},{value:"Choosing the Database Type",id:"choosing-the-database-type",level:3},{value:"Server-Side SDK vs Client-Side SDK",id:"server-side-sdk-vs-client-side-sdk",level:2}];function l(e){const t={code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",ul:"ul",...(0,s.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"design-decisions-and-tradeoffs",children:"Design Decisions and Tradeoffs"}),"\n",(0,n.jsx)(t.p,{children:"Many decisions needed to be made over the course of designing and creating DataLoaf. This section covers the five most impactful decisions. Each discussion covers the problems that needed to be solved, the solution that was chosen and why, and looks at alternatives and why they weren't used."}),"\n",(0,n.jsx)(t.p,{children:"(Goal: engineering challenges. Summary of the challenges. Contextualize the next discussions.)"}),"\n",(0,n.jsx)(t.h2,{id:"design-of-the-database",children:"Design of the Database"}),"\n",(0,n.jsx)(t.p,{children:"There were two problems that needed to be solved when designing the database:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Determine what type of database would be a best fit for DataLoaf's needs."}),"\n",(0,n.jsx)(t.li,{children:"Determine what kind of schema that the database would use."}),"\n"]}),"\n",(0,n.jsx)(t.h3,{id:"choosing-the-database-type",children:"Choosing the Database Type"}),"\n",(0,n.jsxs)(t.p,{children:["When determining which type of database we'd use, it was important to consider what we would use the database for. Earlier, we covered how ",(0,n.jsx)(t.em,{children:"aggregation types"})," are an important part of forming questions to ask the data. We also need to associate events with the users that triggered them. This makes relational databases a natural place to start. We could store events and users in separate tables. From there, SQL provides the features we need to JOIN those tables and make aggregate calculations directly through queries."]}),"\n",(0,n.jsx)(t.p,{children:"While doing research for existing product analytics platforms, we found that columnar databases were the type of database most commonly used when doing any kind of analytics. Backing that up, we found that PostHog uses ClickHouse, which is columnar. But why? What features make columnar databases even more suitable for analysis than relational databases? More importantly, would those reasons line up with what we needed for DataLoaf?"}),"\n",(0,n.jsx)(t.p,{children:"Columnar databases are conceptually similar to relational databases, so their advantages aren't readily apparent. The main difference is how a record is formed. In a columnar database, values are collected into records by column instead of by the relational database's row. But why is that significant?"}),"\n",(0,n.jsx)(t.p,{children:"[TODO; figure comparing relational to columnar database storage structures]"}),"\n",(0,n.jsxs)(t.p,{children:["In a relational database, each record represents all of the information about an entity. For example, if we were representing an event in a relational database, each record would have values in the ",(0,n.jsx)(t.code,{children:"event_name"}),", ",(0,n.jsx)(t.code,{children:"user_id"}),", and ",(0,n.jsx)(t.code,{children:"event_attributes"})," columns. A single event would be made up of a value from these columns, such as: ",(0,n.jsx)(t.code,{children:'"watch video"'}),", ",(0,n.jsx)(t.code,{children:"349520"})," and ",(0,n.jsx)(t.code,{children:'{region: "Alaska"}'}),". Another event entry could be: ",(0,n.jsx)(t.code,{children:'"like video"'}),", ",(0,n.jsx)(t.code,{children:"921516"})," and ",(0,n.jsx)(t.code,{children:'{device: "Android", video: 1025101}'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In a columnar database, a record is collected from all of the information in a single column. An example record of all the values for ",(0,n.jsx)(t.code,{children:"event_name"})," would be ",(0,n.jsx)(t.code,{children:'"watch video"'}),", ",(0,n.jsx)(t.code,{children:'"like video"'}),", ",(0,n.jsx)(t.code,{children:'"watch video"'})," and ",(0,n.jsx)(t.code,{children:'"watch video"'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:['This difference is enormous when the goal is to perform calculations. Looking at the question posted some sections back: "How many videos were watched in the last week?" To get that set of numbers, a relational database would have to look at all of the rows in its ',(0,n.jsx)(t.code,{children:"events"})," table, group the rows that had a value of ",(0,n.jsx)(t.code,{children:'"watch video"'})," for its ",(0,n.jsx)(t.code,{children:"event_name"})," by the date they were watched, then count the total number of rows in those groups. However, in a columnar database, only two rows need to be looked at before it can start summing all of the ",(0,n.jsx)(t.code,{children:'"watch video"'})," entries by their associated watch date: ",(0,n.jsx)(t.code,{children:"event_namede"})," and ",(0,n.jsx)(t.code,{children:"event_created"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"This is why columnar databases are so powerful for analytics: because aggregation queries need to retrieve fewer records. In our use case, where we could have hundreds of thousands of events, retrieving only two records instead of a majority of the records is a huge benefit."}),"\n",(0,n.jsx)(t.p,{children:"So, we've justified the decision of using a columnar database instead of a relational database. Which columnar database should we use? We quickly found Amazon Redshift as a possible solution. Amazon Redshift is a columnar database that's built on top of PostgreSQL and accepts SQL queries. (Possible TODO; extra explanation around why building columnar databases on top of a relational database is so common - because Redshift isn't the only one that does this.)"}),"\n",(0,n.jsx)(t.p,{children:"Even though Redshift seems like a great solution, there are some drawbacks to choosing it. While columnar databases addresses our desire to make aggregated queries, calculating the aggregations at the query level isn't our only option. We could grab all of the necessary data and do the calculations programmatically at the application level (a choice that is explored in a later section)."}),"\n",(0,n.jsx)(t.p,{children:"Additionally, columnar databases have a disadvantage to relational databases when it comes to the CRUD operations beyond 'read.' They've got worse performance for create and update which are important operations to DataLoaf (possible TODO; explain why if it's not self-evident from previous context). It's highly likely that a larger number of people will be using the application concurrently (and therefore generating events) than there will be people that are curious about the application's engagement."}),"\n",(0,n.jsx)(t.h2,{id:"server-side-sdk-vs-client-side-sdk",children:"Server-Side SDK vs Client-Side SDK"}),"\n",(0,n.jsx)(t.p,{children:"The details of all product analytics platforms are different, but most of them have a consistent method for collecting and visualizing data."}),"\n",(0,n.jsx)(t.p,{children:"[figure that illustrates the collection of event data. Maybe rows in a table of example events]"}),"\n",(0,n.jsxs)(t.p,{children:["The kind of data that's collected is split into two categories: ",(0,n.jsx)(t.em,{children:"event"})," data and ",(0,n.jsx)(t.em,{children:"user"})," data. User data is tracked because it can be helpful to associate an event with a specific user. Doing so results in a broader range of questions that you can ask about how users are interacting with your application, and we'll cover how that works in a bit. First, let's define some terminology."]}),"\n",(0,n.jsx)(t.p,{children:"An event represents an action that a user took. An 'action' can be anything, from common tasks like signing in on an account to more specialized tasks like playing a video or adding an item to a cart."}),"\n",(0,n.jsxs)(t.p,{children:["Events and users can have ",(0,n.jsx)(t.em,{children:"attributes"})," associated with them. These are values that help narrow into more specific questions about how users interact with the application."]}),"\n",(0,n.jsxs)(t.p,{children:["When implementing a platform, it's important to design the range of ",(0,n.jsx)(t.em,{children:"metrics"})," that you want to know. A metric is a value that represents the answer to your question over some range of time. An example would be \"how many people made new accounts across the last four months?\" You can observe the trend that maybe your signup rate is doubling every month, indicating a wonderful rate of growth. (need to re-write this - the connection between the term 'metric' and the question that's posed isn't clear.)"]}),"\n",(0,n.jsx)(t.p,{children:"Data is collected through a software development kit (SDK) that can be imported into new or existing application code. SDKs can be client-side or server-side. The main difference between the two is where they gather data from."}),"\n",(0,n.jsx)(t.p,{children:"Client-side SDKs are considered to be a little more unreliable, because add-blockers and other browser settings or add-ons can sometimes block the full range of events from being set, but they allow for a more automated type of collection system that takes less work to set up."}),"\n",(0,n.jsx)(t.p,{children:"Server-side SDKs will collect 100% of the events that you want to track. However, they're more work to set up, as you need to manually define the event and user data across your back-end server. DataLoaf's SDK is a server-side package for Node.js back-ends. We'll explore its details in a bit."}),"\n",(0,n.jsxs)(t.p,{children:["Once data is collected, it's put in some sort of permanent storage. Each platform has a different storage solution, but they all serve the same purpose: to act as a home for your data until you wish to visualize it through ",(0,n.jsx)(t.em,{children:"trends"}),". A trend is some sort of graph that displays the metric over some period of time, and commonly takes the form of a bar or line graph."]}),"\n",(0,n.jsx)(t.p,{children:"[figure that shows an example of a metric from PostHog]"}),"\n",(0,n.jsx)(t.p,{children:"(A description of the figure and how to read its trends.)\n(A description of the interface and what each part of it means; including events, users and attributes. Specifically mention that each platform usually uses a different name for events, users and attributes.)"}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsxs)(t.p,{children:["The kind of data that's collected is split into two categories: ",(0,n.jsx)(t.em,{children:"event"})," data and ",(0,n.jsx)(t.em,{children:"user"})," data. User data is tracked because it can be helpful to associate an event with a specific user. Doing so results in a broader range of questions that you can ask about how users are interacting with your application, and we'll cover how that works in a bit. First, let's define some terminology."]}),"\n",(0,n.jsx)(t.p,{children:"An event represents an action that a user took. An 'action' can be anything, from common tasks like signing in on an account to more specialized tasks like playing a video or adding an item to a cart."}),"\n",(0,n.jsxs)(t.p,{children:["Events and users can have ",(0,n.jsx)(t.em,{children:"attributes"})," associated with them. These are values that help narrow into more specific questions about how users interact with the application."]}),"\n",(0,n.jsx)(t.p,{children:"The most important thing about a product analytics platform is that it helps answer questions that you have about how users interact with your product."}),"\n",(0,n.jsx)(t.p,{children:'For example, two question you might have are "how many people watched a video yesterday?" or "how many unique users watched a video yesterday?" These questions follow a pattern that you can use to determine what kinds of data you want to track in your application.'}),"\n",(0,n.jsx)(t.p,{children:'The first thing to notice about these questions is that there is an action that you can turn into an event: "watch a video"'}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.p,{children:"Choosing a Database\nWhat kind of database was the most important decision that we would need to make. This decision also had a trickle effect on many of the other decisions that were made while creating DataLoaf."}),"\n",(0,n.jsx)(t.p,{children:"While doing research for existing product analytics platforms, we found that columnar databases were the type of database most commonly used when doing any kind of analytics. Backing that up, we found that PostHog uses ClickHouse as its database, which is columnar. But why? What features made them highly suitable for analysis? More importantly, would those reasons line up with what we needed for DataLoaf?"}),"\n",(0,n.jsx)(t.p,{children:"Columnar databases are conceptually similar to relational databases, so their advantages aren't readily apparent. The main difference is how data is associated. In a columnar database, values are collected by column instead of by row. But what does that really mean?"}),"\n",(0,n.jsxs)(t.p,{children:["In a relational database, each record represents all of the information about an entity. If we were representing an event in a relational database, each record would have values in the ",(0,n.jsx)(t.code,{children:"event_name"}),", ",(0,n.jsx)(t.code,{children:"user_id"}),", and ",(0,n.jsx)(t.code,{children:"event_attributes"})," columns. A single event would be made up of a value from these columns, such as ",(0,n.jsx)(t.code,{children:'"watch video"'}),", ",(0,n.jsx)(t.code,{children:"349520"})," and ",(0,n.jsx)(t.code,{children:'{region: "Alaska"}'})," or ",(0,n.jsx)(t.code,{children:'"like video"'}),", ",(0,n.jsx)(t.code,{children:"921516"})," and ",(0,n.jsx)(t.code,{children:'{device: "Android", video: 1025101}'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["In a columnar database, a record is made up of a different set of values. An example record of all the values for ",(0,n.jsx)(t.code,{children:"event_name"})," would be ",(0,n.jsx)(t.code,{children:'"watch video"'}),", ",(0,n.jsx)(t.code,{children:'"like video"'}),", ",(0,n.jsx)(t.code,{children:'"watch video"'}),", ",(0,n.jsx)(t.code,{children:'"watch video"'}),"."]}),"\n",(0,n.jsxs)(t.p,{children:['This difference is enormous when your goal is to perform calculations. Let\'s look at the question we posed a few sections back: "How many videos were watched in the last week?" To get that set of numbers, a relational database would have to look at all of the rows in its ',(0,n.jsx)(t.code,{children:"events"})," table, group the rows that had a value of ",(0,n.jsx)(t.code,{children:'"watch video"'})," for its ",(0,n.jsx)(t.code,{children:"event_name"})," by the date they were watched, then count the total number of rows in those groups. However, in a columnar database, ",(0,n.jsx)(t.em,{children:"only two rows need to be looked at"})," before it can start summing all of the ",(0,n.jsx)(t.code,{children:'"watch video"'})," entries by their associated watch date."]}),"\n",(0,n.jsx)(t.p,{children:"This is why columnar databases are so powerful for analytics: because they need to retrieve fewer records before the calculation (the aggregation) can be performed."}),"\n",(0,n.jsx)(t.p,{children:"So, we've justified the decision of using a columnar database instead of a relational database. Which columnar database should we use?"}),"\n",(0,n.jsx)(t.p,{children:"Once this decision had been made, we quickly found Amazon Redshift as a possible solution, a columnar database that's built on top of Postgres and accepts SQL queries. But there were other aspects to consider before we could decide if this would be our final solution."}),"\n",(0,n.jsx)(t.p,{children:"(TODO; cover other Amazon databases and why we turned them down, including Redshift's huge storage capacity and other advantages that columnar databases offer...?)"}),"\n",(0,n.jsx)(t.p,{children:"The second most important decision to be made around our database was the schema that it would use."}),"\n",(0,n.jsxs)(t.p,{children:["(TODO; complete discussion around how we settled on the ",(0,n.jsx)(t.code,{children:"attributes"})," structure)"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"we considered an ec2 instance or a microservices structure."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"Intermediary lambda allows for decoupling between the SDK and delivery stream. Without it, the SDK would have to directly send the format that Firehose expects. This lets users develop and implement their own infrastructure if they choose to, so long as it has a URL endpoint that accepts HTTPS requests."}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"What the problem was"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We needed infrastructure that would host the full stack application"}),"\n",(0,n.jsx)(t.li,{children:"We needed to support HTTPS"}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"What the solution was"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"We went with a load balancer to use Amazon Certificate Manager."}),"\n",(0,n.jsxs)(t.li,{children:["We went with an EC2 instance and Nginx / App Docker containers.","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Nginx serves the front-end, which is a single page app."}),"\n",(0,n.jsx)(t.li,{children:"App Docker container runs our back-end Express server."}),"\n"]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["\n",(0,n.jsx)(t.p,{children:"What the alternatives were"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Serving the front-end from a CDN. Decided against it because:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"we didn't want to add the cost of more infrastructure if it wasn't necessary"}),"\n",(0,n.jsx)(t.li,{children:"How did we justify the lack of CDN? People in companies that are spread over the world will have latency when accessing the front-end. Because this application is not expected to be used outside of a company, and because the Redshift cluster has to live in a specific region (thereby extending latency from queries if we're far away), it didn't matter if the initial load of the front-end app was a bit faster due to being geographically closer."}),"\n"]}),"\n"]}),"\n",(0,n.jsxs)(t.li,{children:["Serving the front-end from an S3 bucket. Decided against it because:","\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"I don't remember why."}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:"Setting up TLS certificate through Nginx. Decided against it because:"}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{})]})}function h(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(l,{...e})}):l(e)}},8453:(e,t,a)=>{a.d(t,{R:()=>i,x:()=>r});var n=a(6540);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);