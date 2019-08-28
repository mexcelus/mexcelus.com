---
path: "/post-one"
date: "2019-08-28"
title: "Building a fast SSG with Gatsby.js"
author: "Guillermo V."
slug: "blogpost"
---

## Planting seeds
At this point, my guess is that all Jay Gatsby and `The Great Gatsby` jokes are worn out ever since Gatsby.js came out in 2015, but from what I've read in this past months it has attracted enough attention to become a great tool for front-end software development. Convincing programmers (mainly programmers-bloggers) to migrate from Wordpress, Vuepress, Hexo, Jekyll ()...the list goes), to this powerfull SSG (Static Site Generator) standing on Node.js shoulders using React.
    
Gatsby's real punchline comes with [GraphQL](https://graphql.org), an **open-source** data query manipulation language developed by Facebook in 2012, interestingly getting publicly released in 2015 along side Gatsby.js. The most important thing out of this, it makes Gatsby's performance, and I quote, *-blazingly fast-*. This makes sense considering the image optimization and pre-fetching resource capability I expericed during the project of building my own website running on Gatsby.
  
This brings me to real title of this post. After picturing Gatsby's potential as a documentation application, I decided that as my first big challenge, I would build my own SSG. Funny thing, along the way I discovered it's not as complicated as I expected it to be, probably thanks to all well documented resources out there. I'm trying to document the starting milestones of my project as best posible in this post.  

## Setup    
Setup can be done easily if you have both `Homebrew` and `Node.js`, if you don't, I highly recommend you do install `brew` first and from there install `node` to avoid hiccups along the way. Here's the steps to easily [install](https://docs.brew.sh/Installation) `brew` to your environment. When you're done with that you're able to jump into installing `node` and checking it's version with the following BASH commands:
```bash
brew update
brew intall node
node --version
npm --version
```

Now that we have new tools in our hands and our GIT open, let's start growing. The next thing we want to do is getting the Gatsby CLI published npm package, which lets you quickly create a new Gatsby-powered site and run commands for developing the site. This is available running `npm install -g gatsby-cli`. This will probably take a while, but when it's done you should be able to see the commands running `gatsby -h`. You should get something like this:
```bash
Guillermos-iMac:gatsby guillermovillalta$ gatsby -h
Usage: gatsby <command> [options]

Commands:
  gatsby develop                   Start development server. Watches files, rebuilds, and
                                   hot reloads if something changes
  gatsby build                     Build a Gatsby project.
  gatsby serve                     Serve previously built Gatsby site.
  gatsby info                      Get environment information for debugging and issue
                                   reporting
  gatsby clean                     Wipe the local gatsby environment including built
                                   assets and cache
  gatsby repl                      Get a node repl with context of Gatsby environment, see
                                   (https://www.gatsbyjs.org/docs/gatsby-repl/)
  gatsby new [rootPath] [starter]  Create new Gatsby project.
  gatsby plugin                    Useful commands relating to Gatsby plugins
  gatsby telemetry                 Enable or disable Gatsby anonymous analytics
                                   collection.

Options:
  --verbose                Turn on verbose output               [boolean] [default: false]
  --no-color, --no-colors  Turn off the color in output         [boolean] [default: false]
  -h, --help               Show help                                             [boolean]
  -v, --version            Show the version of the Gatsby CLI and the Gatsby package in
                           the current project                                   [boolean]
```

If you run into any problems I would recommend browsing the npm [docs](https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) on fixing permissions provided on the Gatsby documentation website.

Done, this was the first milestone I hit and felt totally awesome setting my new Gatsby environment.🎉 Now with our environment align up, we can go ahead and create our first Gatsby site starter pack with bare essentials needed. Jump into your `terminal` and type:
```bash
gatsby new hello-world https://github.com/gatsbyjs/gatsby-starter-hello-world
cd hello-world
gatsby develop
```
This step encompasses the pull into Gatsby's repository of the core code for a `hello-world` application, moving into the repo's folder and running the `gatsby` command to spin up the development server. From here you will be able to interact locally with your new site in a development environment.  
  
You're able to view your creation by going into your browser of choice and navigating into `http://localhost:8000`. And just like that, this is the beginning of a new Gatsby site. You should be able to visit this site for as long as your development server is running, you are to turn it off by going back to the terminal and holding down `control+c`.

That's pretty much what it takes to have a functioning SSG/App running with Gatsby. The rendering, looks, feels and flavours are pretty much to your pick and React experience. I'm going to go over my personal top-3 things I consider important when programming with Gatsby.

## File configuration
A lot of files get created meanwhile you're running your initial Gatsby-CLI repo. In my experience, two that become really importat are `gatsby-config.js` and `gatsby-node.js`, both files are localted at the root of your project. By using them you're able to tweak your site's functionality like adding plugins, creating mapping, adjusting the site's configuration, specify siteMetadata and implementing APIs.  
  
It's enjoyable to add plugins and test them out since, thanks to Node, it's really easy and straightforward. One that I consider to enhance Gatsby's documentation functionality is `gatsby-transformer-remark`, which allows you to parse Markdown files using [Remark](https://remark.js.org). In order to install it you must run the following `npm command` on your bash terminal:
```bash
npm install --save gatsby-transformer-remark
```
Then you can jump into your `gatsby-config.js` and set up the configuration on your plugins array.
```javascript
module.exports = {
  siteMetadata: {
    title: `MEXCELUS`,
    description: ``,
    author: ``,
  },
  plugins: [
    ...
    `gatsby-transformer-remark`,
    ...
  ]
  ...
}
```
This is the process you usually follow in order to install a new plugin into your project. Some configurations might require additional steps but you're able to find all of them fairly well documented on [Gatsby.org](https://www.gatsbyjs.org).  
  
### Creating APIs  
Now that we're able to use the `gatsby-transformer-remark` plugin and also that our project recognizes files with `.md` and `.markdown` extensions, we can code in `gatsby-node.js` how we want to query and render the data/contents of our Markdowns, creating pages programmatically. Each Markdown file is parsed into a node of type `MarkdownRemark` and all frontmatter fields (such as author, date, path, title, layout, icons and any fields the author created) are converted into GraphQL fields. Here's how I designed my `createPage` API call in order to create my this blog post using the power of GraphQL in my Gatsby-React environment:
```javascript
const path = require('path');

exports.createPages = ({actions, graphql}) => {
    const { createPage } = actions;

    const postTemplate = path.resolve('src/templates/blog-post.js');

    return graphql(`
        {
            allMarkdownRemark {
                edges {
                    node {
                        html
                        frontmatter {
                            author
                            date
                            path
                            title
                        }
                    }
                }
            }
        }
    `).then( res => {
        if(res.errors) {
            return Promise.reject(res.errors)
        }

        res.data.allMarkdownRemark.edges.forEach(({node}) => {
            createPage({
                path: node.frontmatter.path,
                component: postTemplate
            })
        })
    })
}
```  
The mayor takeaway comes from GraphQL looking into my file directory and rendering results using the `blog-post.js` template I coded. You can run your own test querys to check existing files inside your own project repo by running your Gatsby development client and browsing to `http://localhost:8000/___graphql`, from which you're able to view `GraphiQL`, an in-browser IDE which allows you to explore your site's data and schema, **really** powerful stuff. I don't want to dive to deep into explaining how wonderful and useful `GraphQL` has become and how it works because this post will become twice as long, so I might go over it in the near future, but I would strongly recommend visiting their [site](https://graphql.org) and getting familiar with this solid and robust technology.
  
## Layout
Inside our new Gatsby project, depending on the release, we may see some or all of the following folders and files:
```
|-- /.cache
|-- /plugins
|-- /public
|-- /src
    |-- /pages
    |-- /templates
    |-- html.js
|-- /static
|-- gatsby-browser.js
|-- gatsby-config.js
|-- gatsby-node.js
|-- gatsby-ssr.js
|-- package-lock.json
|-- package.json
|-- README.md
```
Inside of the `src/pages` folder you will be able to find all pages existing in your environment with the good old reliable `index.js` as home. From here you're able to create as many javascript files as you want, which React will turn into pages with an assign URL. Here's a simple `aboutme.js`example of how one looks like (one of my test pages when I started with this website):
```javascript
import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"

const AboutPage = () => (
    <Layout>
    <div>
      <Link to="/aboutme/">
        <h1>About me:</h1>
      </Link>
      <p>I really like donuts!</p> 
    </div>
    </Layout>
)
export default AboutPage;
```

This is we run into our first hands-on with [JSX](https://reactjs.org/docs/introducing-jsx.html), which pretty much looks like if `HTML`, `XML` and `JavaScript` had a baby. This great syntax extension to JavaScript adds some fireworks to the whole equation bringing markup and logic into one hybrid template language thanks to React. I would highly recommend you check out the poetic and detailed definition `React` offers about it [here](https://reactjs.org/docs/introducing-jsx.html). I would just like to always remember myself that `React DOM` uses the `camelCase` property naming convention. Keeping this in mind will help you prevent unnecessary minutes of debugging.
  
Getting back to the code sample above, I'll break it down into three steps:

### Importing what you need
```javascript
import React from 'react'
import { Link } from "gatsby"
import Layout from "../components/layout"
``` 
This is where you explote the power of having `React` and `Gatsby` in your developing environment. You're able to **`import`** components or modules that will help you render your page better and manage the dynamic elements you want on it. In this example you're able to see we're calling the `React` module since it's our main tool, the `{ Link }` module from `gatsby` and the `Layout` component out of my own library.

### Placing the pieces together
```javascript
const AboutPage = () => (
    <Layout>
    <div>
      <Link to="/aboutme/">
        <h1>About me:</h1>
      </Link>
      <p>I really like donuts!</p> 
    </div>
    </Layout>
)
```
'Basic' React! `JSX` is creating our page as a `const` function using the `Layout` component, which handles to page's layout and how it looks like, making all childs follow that format, and the `Link` component, which is a wrapper that enables linking to internal pages as a powerful performace feature called preloading, it replaces the use of `<a>` tags inside our code. In order to use the `Link` component you must specify the path of our destination inside the `to=` property.

### Exporting it home
```javascript
export default AboutPage;
``` 
Usually all files end up exporting the results of the `JSX` above to be called from different places on our website. Depending on syntactic preferences, this `export` functionallity might be declared before the function rendering the content of the page using `export default`, or at the end, by exporting the function coded, you can look at other examples more in depth in Gatsby's own [Recipies](https://www.gatsbyjs.org/docs/recipes/).  
  
## Ready to harvest
Hopefully this blog post should give you a **starting point** and open your curiosity to look further into using Gatsby as a front-end `JavaScript` framework. I considered it to be quite impressive and elegant, also it's community is growing bigger, strong and healthy, that probably means that Gatsby is here to stay. In a way SSGs are being seen as a way to build the web of the future. Here you will be able to find the source code for this project and additional resources:
- View [Source](https://github.com/mexcelus/mexcelus.com)
- Gatsby.js [Documentation](https://www.gatsbyjs.org/docs/) 