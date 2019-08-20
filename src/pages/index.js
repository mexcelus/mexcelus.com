import React from "react"
import Link from 'gatsby-link'

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
    <br></br>
    <br></br>
    <div className="my-Name">
      <div className="my-Input my-Name">
        <div style={{width: '350px'}}>
          <Image  /> 
        </div>
        <div>
          <h1>
            Guillermo V.
          </h1>
          <p>
            I'm a software developer working with modern Javascript living in SLC, Utah. I enjoy designing and building new stuff, breaking down complex integrations and contributing to open source. Welcome to my digital garden.
          </p>
          <div className='my-Name' style={{ paddingLeft: '20px' }}>
            <div style={{ width: '50px', height: '50px' }}>
              <a href="https://twitter.com/mexcelus"><Tweet /></a>
            </div>
            <div style={{ width: '45px', height: '45px' }}>
              <a href="https://github.com/mexcelus"><Octocat /></a>
            </div>
            <div style={{ width: '50px', height: '50px' }}>
              <a href="https://www.linkedin.com/in/guillermo-villalta-024b3693/"><LinkedIn /></a>
            </div>
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
            <h5>Blog Posts</h5>
            <h3>&nbsp;</h3>
          </div>
        </Link>
        <Link to="#">
          <div className="home-content">
          <TreeHouse />
            <h5>Open Source Pojects</h5>
            <h3>(comming soon)</h3>
          </div>
        </Link>
      </div>
    </div>
    <div className="sub-content">
      <h3>ALWAYS GROWING COOL NEW STUFF...</h3>
    </div>
    <div className="contact-me" style={{width: '70%'}}>
    <SubForm />
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
