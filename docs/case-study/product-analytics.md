---
sidebar_position: 2
---
# What is Product Analytics?
Product analytics is a branch of data analytics that focuses on gathering information about how users engage with a product, and using that information to make data-informed decisions about how the product should evolve. In software, product analytics is applied to an application. 

Analytics data is usually captured and managed by a product analytics platform. Several platforms exist, such as Mixpanel, PostHog, Heap and Amplitude. Each of these platforms can be used to collect and visualize trends over time about how an application is being used by its user base. These platforms are _managed_, which means that the company that provides the platform is responsible for storing and giving you a means to view your application's data. 

This section will introduce the field of product analytics and explore the tradeoffs of such managed solutions. It will also explain how a self-hosted solution might be more desirable, and discusses how DataLoaf can fill this role. Once product analytics is understood more deeply, discussions about the challenges of implementing such a platform can make more sense.


### Product Analytics Helps Drive Business Decisions
When companies don't know how their users are engaging with an application, it can be difficult to know if they're making the right decisions about the future of their product. For example, say they launched a new feature. Without a tool like product analytics, it can be difficult to know whether or not their users have even noticed the feature. Worse, maybe they're now having a more negative experience than before and are logging out at a much higher rate than normal. The company would have no idea.

General feedback about new features is only one way in which product analytics can impact a company. 

Take Twitch for example, a popular livestreaming platform for video games. It started in 2007 under the name of Justin.tv as a way for anyone to livestream any part of their life that they wanted. Within a couple of years, the streaming category for gaming far outstripped lifestyle content, so the owners created a spinoff site called Twitch that would focus exclusively on video game streaming[1]. A product analytics platform would have been the perfect tool to use to confirm this.

But what about more subtle trends? Another potential use for a product analytics platform is to get the information necessary to decide where to allocate budgeting for marketing. Say the company is a video streaming service that's trying to compete with YouTube. They can use a combination of user regional data and "video played" event count data to generate a graph that will very clearly display that their users in one region are way lower than users in another region. This information can then be used to allocate a higher marketing budget for the region with less views. 

### How Existing Product Analytics Platforms Work
The details of each product analytics platform are different, but most of them have a consistent method for collecting and visualizing data. The most important thing about a product analytics platform is that it's there to help a company _answer questions_ about how users interact with their application. That's a good place to start. 

One question a video streaming company might have is "How many total videos were watched over the last week?" A mixture of selections in the interface of a product analytics platform are put together to answer this question. 

![Screenshot of Mixpanel with 'watch video' and 'total events' selected](https://lh7-us.googleusercontent.com/nz1T33UnKWOvHmFQ-TcWHP9jRIgT9qnU5RmYgDXBNgqFep3WlsqEwTzKzJNLcJDvBJy_ZNyoAl_b5fFclyXl7i9fvgXBLR444P0oQFnPTsvl7q7qtZGcRVRpUmGBRZDdWR1z_ZHHqrVOiaUy)

The above figure is a screenshot of Mixpanel's data visualization interface with some sample data that can answer this question. Two pieces of information have been selected from the dropdowns on the left of the screen (under "Metrics"): "watch video" and "Total Events."

"watch video" is an example of an _event_, which is a category of data that can be tracked through the platform's SDK. An event represents an action that a user can take when interacting with the company's application. An 'action' can be anything, from common tasks like signing in to an account to more specialized tasks like playing a video or adding an item to a cart. This covers the "videos were watched" part of the question. 

"Total Events" is an _aggregation type_. Aggregation types are a predetermined list that's determined by the platform. This is one of the more important parts of a question, because it determines which equation was used to arrive at a final number for each data point. In this case, "Total Events" will count the total number of whatever selected event happened on a given unit of time (hour, day, month, etc...). This covers the "how many total..." part of the question. 

There's a list of buttons above the graph that represent date ranges. This screenshot has "7D" selected, which means "seven days." This part of the selection covers the "over the last week" part of the question.

A line graph is generated as a result of these sections ("watch video" for the event type, "total events" for the aggregation type and "seven days" for the date range). This can be used by the company to answer the question "How many total videos were watched over the last week?" They can clearly see that over 30,000 videos were watched on December 27th. Likewise, they can see that there were significantly fewer watched videos on December 30th (around 13,000). 

To show an example of how another aggregation type works, here's a different question: "How many unique users watched videos over the last week?"

![Screenshot of Mixpanel with 'watch video' and 'Unique Users' selected](https://lh7-us.googleusercontent.com/gP11ii-iMNof1XBB0M6ta4RK3ix0N91vCFQZDzpWZa2ZC8s17-L0mthTnmQ-lmcwAr3rfg9lnHjxXtnXkP0YguRWOmieMUJkvZdUeTmZrVxrXnt_ZVGseUGMaaKafUCkzMvPij9wl7rDljw8)

The aggregation type has been changed to "Unique Users," which is the only change. A completely different set of data is generated and displayed by the line graph. It can be seen that there were nearly 8,000 unique users that watched videos on December 27th. 

_Users_ are another category of data that's collected by the SDK. The most useful thing about tracking users is that they can be associated with a given event. That association is why the "Total Users" aggregation type can exist. 

This is great so far, but it might seem a little limited in its usefulness. After all, questions like "How should we distribute the marketing budget based on regions that get less views?" can't be answered. That's where _attributes_ come in. Attributes are a third category of data. They don't exist in isolation, like events and users can. Instead, attributes are values that can be associated with an event or a user. When an event or user is registered with the SDK, the company can add as many attributes as they want. 

A question that can be asked using attributes is: "How many videos were watched last week in Alaska?" The scope of the question is being narrowed from total videos watched to just the videos that were watched in a specific region.

![Screenshot of Alaska total videos watched](https://lh7-us.googleusercontent.com/aiAy8QpKD_DhrfMymVUrEF-tw0V2nWCzjiKqAeyr_TmRCFHuAnY8OEjz56XWu9ETWIHZaP2F6Awa9h03MFkUp3TIjKzbOwhQANijjpPuY7rb8HPXRfWG04oypr5sJl3esUU4AS2PSyX1z8EP)

The aggregation type on the left side of the screenshot has been changed back to "Total Events" to line up with the question that's being asked. Something important is that a _Filter_ has been added. Filters are the real power of product analytics platforms - they filter aggregation calculations based on the attributes that are associated with an event or user. In this case, the company is able to look at the total number of videos that were watched in the region of Alaska over the last seven days. On December 27th, 124 videos were watched - compared with the over 30,000 that were watched across all regions. 

A little more information needs to be gathered to be sure that the percentage of videos that are being watched in Alaska is small enough to warrant a higher marketing budget for that region, but product analytics platforms make it easy to get that information. Companies have complete control over the types of events and their associated attributes. The events and attributes that they need can be pulled from the kinds of questions that they want to ask about how users are engaging with their application.

### Tradeoffs of Managed Product Analytics Platforms
Platforms like Mixpanel and PostHog are called _managed_. This means that when data is sent from a company's application, it gets moved to and stored in a database that's hosted and maintained by the platform provider. Likewise, the dashboard that's used to generate the line graphs that were shown in the last section is accessed through an account on the platform's website. Even though the data from _all_ of the applications that use the platform are stored together, a specific company's data is able to be associated with them because the platform creates a project token for their account. This token is imported into the company's application. 

Platforms like Mixpanel and PostHog are called _managed_. This means that when you send data from your application, it gets sent to a database that is hosted and maintained by the company that provides the platform. Likewise, the dashboard that you use to access your visualizations is accessed through an account on the company's website. These managed platforms are able to match events and users with your application because you specify some sort of project token when implementing the SDK. 

As with anything, there are trade-offs when choosing to use one of these managed platforms. Business needs will determine which type of platform (managed or self-hosted, which is covered in the next section) is a better fit for the company's budget.

Pros:
- Won't have to provision and manage your own infrastructure.
- Paid tiers will ensure compliance with industry and privacy laws.
Cons:
- Price is based on events recorded per month, after a lower-limit of free events.
- No control over the data that the app generates. No recourse if something goes wrong.
- No customization, companies are tied to the feature set provided by the platform's dashboard.
- Limited in how much data you can store in both free and paid options. 
- The cost of a managed service can change at any time. 

There are positives to using a managed platform, which mostly come in the form of convenience. Companies won't have to provision and manage any of the infrastructure that's used to collect and store application data. Nor will they have to create and manage the code that's associated with an SDK needed to collect data and the full-stack application needed to visualize data. Paid tier options also come with compliance guarantees to industry and privacy laws, such as General Data Protection Regulation (GDPR) and Health Insurance Portability and Accountability Act (HIPAA).[2]-[3]

This convenience comes with some sacrifices. 

Because the cost of using a managed application is normally linked to the number of events ingested per month, price can quickly become a problem if the company's application has a lot of monthly active users and they want to track a lot of events. A single user can generate tens to hundreds of events in a single session, depending on how the company has decided to track information. This also limits how much data the company can store per month. 

Platforms will usually allow a number of events per month for free before beginning to charge their customers. For example, Mixpanel allows for 20 million events per month on all tiers[4], and PostHog allows 1 million events per month for free, before charging you on a per-event basis. On PostHog, 20 million events per month will cost close to 2,000 dollars per month[5].

In addition to cost, there's another significant drawback: less control over the data. Companies that use a managed platform have no control or ownership over the data that their application generates. They depend on the platform to store that data safely and keep it available at all times. There is no guarantee of recourse if something goes wrong. 

### The Role of DataLoaf as a Self-Hosted Platform
There are two things that "self-hosted" could mean in the context of a product analytics platform. 

The first is a platform that is _completely_ self-hosted. This usually shows up in the form of a package of files that can be deployed to an infrastructure and web domain of the company's choice. This path can take a lot of work and technical knowledge to set up properly, because the company will need to understand the individual pieces of their desired infrastructure and how they fit together. They'll also need to know how to host a web application for the data visualization component. PostHog actually offers something like this to its customers in the form of a set of Docker images. 

The second is a platform that is "self-hosted" in the sense that it's a 'kernel' that gives the company a starting point. Its infrastructure is set up and deployed for them on a cloud account that they control, like Amazon Web Services (AWS). They still have access and control over the infrastructure, and can even go in and make any changes that they may want through the account's console interface. 

DataLoaf is this second kind of self-hosted. The next section will give some background about what DataLoaf is, and the section after that will explore why it's that way.


