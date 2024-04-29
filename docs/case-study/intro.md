---
sidebar_position: 1
---
# Introduction
DataLoaf is an open-source, self-hostable product analytics platform. It aims to be easy to deploy and simple to implement in a new or existing code base. DataLoaf's target users are small to medium-sized companies that want to add data-informed decision making to their product.

DataLoaf provides three components that work together to capture, store and analyze data about how users engage with an application:

- A CLI deployment tool that provisions AWS infrastructure.
- A Node.js SDK that captures data from back-end servers. 
- A full-stack application that generates insights from data. 

The next section will go into detail about exactly what a product analytics platform is. After that, the following section explores DataLoaf's infrastructure and other components in detail. The third section covers the main point of this case study: an exploration of the engineering decisions and tradeoffs that had the highest impact on DataLoaf's design. The final section concludes with a summary.
