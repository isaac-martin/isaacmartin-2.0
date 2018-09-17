# Portfolio Site
Static site generated with Gatsby, hosted on Netlify, netlifyCMS used to generate content.

## Prerequisites 
Node / NPM (Gatsby supports versions of Node back to v6 and npm to v3. So whatever you have running should be ok)

## Getting Started
Clone this repo  
`yarn install` (or NPM) to get moddules installed
``gatsby develop`` will run local dev server with live reloading.   
May need to authenticate if you need to view the CMS

## Commands

Develop, Live reload - build production  
```sh
gatsby build
gatsby develop
yarn test
```

## Tests
More to do here, but Jest / Enzyme is set up.

## Deployment
Opening a PR in GitHub will trigger a build on netlify. The build gives a temporary URL where it can be previewed before pushing out to the main url. Merging that PR to master will push to the main URL/

