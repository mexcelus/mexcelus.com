import React from "react"
import Link from 'gatsby-link'
import { Helmet } from 'react-helmet'

import Layout from "../components/layout"
import Footer from "../components/footer"
import SubForm from "../components/subform"
import Image from "../components/image"
import Tweet from "../components/twitter-img"
import Octocat from "../components/github-img"
import LinkedIn from "../components/linkedin-img"
import TreeHouse from "../components/treehouse"
import TreeMower from "../components/treemower"


// import "../components/twitter"

const IndexPage = () => (
  <Layout>
  <Helmet>
    <title>MEXCELUS</title>
    <link rel="icon" href="../content/images/triangle.png" />
    <meta name="twitter:card" content="summary_large_image"></meta>
    <meta name="twitter:image" content="https://i.pinimg.com/originals/97/7e/ff/977effff675dad9a1963c4fefd9f821d.jpg"></meta>
    <meta name="twitter:title" content="www.mexcelus.com"></meta>
  </Helmet>
    <br></br>
    <br></br>
    <div className="my-Name">
      <div className="my-Input my-Name">
        <div className="my-picture">
          <Image  /> 
        </div>
        <div className="my-info">
          <h1>
            Guillermo V.
          </h1>
          <p>
            I'm a software developer working with modern Javascript trying to record my journey into software development. Based on SLC, Utah. I enjoy designing and building new stuff, dissecting complex integrations and contributing to open source. <span className="garden">Simplicity is the ultimate sophistication!</span>
          </p>
          <div className="social-media">
          <a href="https://twitter.com/mexcelus">
          <Tweet />
          </a>
          <a href="https://github.com/mexcelus">
          <Octocat />
          </a>
          <a href="https://www.linkedin.com/in/guillermo-villalta-024b3693/">
          <LinkedIn />
          </a>
          </div>
        </div>
      </div>
    </div>
    <div className="main-container">
      <div className="sub-content">
        <h3>&nbsp;</h3>
      </div>
      <div className="content-holder">
        <Link to="/blog">
          <div className="home-content">
          <TreeMower />
            <h5 className="garden-text" style={{ background: "#D3D3D3"}}>Blog Posts</h5>
            <h3 className="garden-text" style={{ background: "#D3D3D3"}}>&nbsp;</h3>
          </div>
        </Link>
        <a href="https://gevh.dev">
          <div className="home-content">
          <TreeHouse />
            <h5 className="garden-text" style={{ background: "#D3D3D3"}}>Open Source</h5>
            <h3 className="garden-text" style={{ background: "#D3D3D3" }}>&nbsp;</h3>
          </div>
        </a>
      </div>
      <div className="sub-content">
        <h3>ALWAYS BUILDING COOL NEW STUFF...</h3>
      </div>
    </div>
    <div className="contact-me" style={{width: '70%'}}>
    <SubForm />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
