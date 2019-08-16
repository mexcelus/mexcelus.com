import React from "react"

import Layout from "../components/layout"
import Footer from "../components/footer"
import Image from "../components/image"
import Tweet from "../components/twitter-img"
import Octocat from "../components/github-img"
import LinkedIn from "../components/linkedin-img"

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
    </div>
    <Footer />
  </Layout>
)

export default IndexPage
