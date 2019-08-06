import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <div className="my-Name">
      <div style={{width: '150px', height: '150px'}}>
      <Image  /> 
      </div>
      <h3>
        Guillermo
      </h3>
      <div>
      </div>
    </div>
    <br></br>
    <br></br>    
    <Link to="/page-2/">Go to page 2</Link>
  </Layout>
)

export default IndexPage
