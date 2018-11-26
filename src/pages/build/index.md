---
templateKey: build
title: 'Building this website with Gatsby, React, NetlifyCMS + Netlify'
---
The previous version of this site was built using Jekyll and I hadn't updated anything in over 12 months. I didn't have it cloned locally on my machine and to be honest I had out grown the design.
I took this as a perfect excuse to rebuild. My goals for this product were

* Rebuild in a short amount of time so I could package with the job application
* Site to render incredibly fast
* Not have a recurring cost for hosting
* Strip the fancy UI interactions my old website had
* Allow me to easily edit projects / content
* Limit packages / plugins used

Based on prior research and my experiences I decided on using the JAM stack as mentioned above. \
For most of these tools I had only minor exposure to them — with the exception of React

* I discovered [NetlifyCMS](https://www.netlifycms.org/) while proposing a headless CMS for a client but never put it to use apart from forking [this starter](https://github.com/AustinGreen/gatsby-starter-netlify-cms) and playing around in the backend
* I had used [Gatsby](https://gatsbyjs.org) once a few releases ago, but had never put anything into production
* I feel like I had only scratched the surface of [GraphQL](https://graphql.org/). It is used by Shopify on the backend when building custom apps to access store admin's. This is how Gatsby handles it's data layer.

#### Thoughts During

* It took a bit more work then I had hoped to get NetlifyCMS integrated with Gatsby, there was some package errors due to me using the pre-release V2.0 of Gatsby
* The code structure is pretty similar to that of most React projects
* Loving being able to define what data you want in your GraphQL call is far more efficient for rendering that data inside components. 

#### Some Takeaways

* I have loved using a more simple CMS then I am used to particularly when I have as much control as I have with NetlifyCMS.
* A CMS was very much
  overkill for this. All it does is generate .md files, which with knowledge of how Gatsby compiles websites this could be done in VSCode
* GraphQL is incredible. I was used to getting data from REST endpoints and its nice having a much smaller subset of data to traverse through.

#### Whats Next?

See the list below for issues on my [repository](https://github.com/isaac-martin/isaac-martin2.0) of additional features I will be adding in over the coming days / weeks.
