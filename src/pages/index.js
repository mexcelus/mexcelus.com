import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"

const IndexPage = () => (
  <Layout>
    <div className="my-Name">
      <div style={{width: '150px', height: '150px'}}>
      <Image  /> 
      </div>
      <div>
        <h1>
          Guillermo
        </h1>
        <p>
          I'm a software developer specializing in modern JavaScript living in Salt Lake City, Utah. I enjoy building things from scratch, contributing to open source, and learning new ways to cook broccoli. Welcome to my garden!
        </p>
      </div>
      <div>
      </div>
    </div>
    <br></br>
    <br></br>    
  </Layout>
)

export default IndexPage
