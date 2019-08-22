---
path: "/post-one"
date: "2019-07-29"
title: "Building a fast SSG with Gatsby"
author: "mexcelus"
slug: "blogpost"
---

At this point my guess is that all Jay Gatsby and `The Great Gatsby` jokes are worn out ever since Gatsby.js came out in 2015, but eversince from what I've read in this past months is that it attracted enough attention to become a great thing. Convincing programmers (mainly bloggers) to migrate from Wordpress, Vuepress, Hexo, Jekyll, and the list goes, to this powerfull SSG (Static Site Generator) standing on Node.js shoulders using React.
  
But Gatsby's real punchline comes with GraphQL, **open-source** data query manipulation language developed by Facebook in 2012, interestingly geting publicly released in 2015 along side Gatsby.js. The most important thing out of this is, it makes Gatsby's performance, and I quote, *-blazingly fast-*. This makes sense thanks to the image optimization and pre-fetching resources capability I expericed during the project of building my own website running on Gatsby.

This brings me to real title of this post. After picturing Gatsby's potential as a documentation application, I decided that as my first big challenge, I would build my own SSG. Funny thing is that along the way I discovered it's not as complicated as I expected to be, probably because of all of the documentation out there. I'm trying to document the start of my work as best posible in this document.  
  
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

### File Setup
A lot of files get created meanwhile you're running your initial Gatsby-CLI repo. In my experience, the ones that might become the most importat ones are `gatsby-config.js` and `gatsby-node.js`.