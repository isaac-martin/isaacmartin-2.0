---
title: 'Building this website with Gatsby, React, NetlifyCMS + Netlify'
---
Between the discussions of static site generators and headless CMS' there has been a bit of a resurgence in server less websites. \
\
As preparing to apply for a new role I needed to add some more recent projects to this website and remove. The previous version of this site was built using Jekyll and I hadn't updated anything in over 12 months. I didn't have it installed locally on my machine and to be honest I had kind of grown old of the design. 

I took this as a perfect excuse to rebuild. My goals for this product were

* Rebuild in a short amount of time, I couldn't afford to be any later getting the previously mentioned job application in
* Site to render incredibly fast
* Not have a recurring cost for hosting
* Strip the fancy UI interactions my old website had
* Allow me to edit projects / content without having to update NPM packages / run security fixes etc.
* Not use jQuery

Based on prior research and my experiences I decided on using the JAM stack as mentioned below. \
For most of these tools I had limited exposure to them — with the exception of React

* I discovered [NetlifyCMS](https://www.netlifycms.org/) while researching headless CMS' for a client but never put it to use apart from forking [this starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms) and playing around in the backend
* I had used [Gatsby](https://gatsbyjs.org) once a few releases ago, but had never put anything into production
* I feel like I had only scratched the surface of [GraphQL](https://graphql.org/). It is used by Shopify on the backend when building custom apps to access store admin's. This is how Gatsby handles it's data layer.

### Thoughts / Problems During
* Initially I had some troubles getting the latest version of Gatsby and NetlifyCMS to play nice together. They are both in Beta so it took some wrangling to ensure I wasn't getting package errors and it was authenticating with Git correctly. Reading documentation thoroughly and traversing git issues is key here. 

### Some Thoughts After
* I have loved using a more simple CMS then I am used to particularly when I have as much control as I have with this. I don't need to worry about performance or security issues as much as I would had I built this using Wordpress as the CMS. 
* GraphQL is incredible. I am used to getting data from REST endpoints and its nice having a much smaller subset of data to loop through. 
*
