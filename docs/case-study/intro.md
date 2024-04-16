---
sidebar_position: 1
---
# Introduction
DataLoaf is an open-source, self-hostable product analytics platform. It aims to be easy to deploy and simple to implement in a new or existing code base. DataLoaf's target audience is small to medium-sized companies that want to get started with data-informed decision making.

DataLoaf provides three components that work together to capture, store and analyze data about how users engage with an application:

- A CLI tool that makes it easy to deploy the required infrastructure on AWS.
- An SDK for Node.js that is used by a back-end server that captures event and user data.
- A full-stack application that enables visualization of the collected data for insights.

The next section will go into detail about exactly what a product analytics platform is. After that, it explores DataLoaf's infrastructure and other components in detail. 

With all of the necessary background information contextualized, the third section can tackle the main point of this case study: an exploration of the engineering decisions and tradeoffs that had the highest impact on the application.

The last two sections wind things down with a description of some additional work that could improve the project moving forward and a conclusion. 
