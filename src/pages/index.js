import React from "react"
import GitHubButton from 'react-github-btn'

import Layout from "../components/layout"
import Image from "../components/image"
import "../components/twitter-widgets"

const IndexPage = () => (
  <Layout>
    <br></br>
    <div className="my-Name">
      <div className="my-Input my-Name">
        <div style={{width: '350px', height: '350px'}}>
          <Image  /> 
        </div>
        <div>
          <h1>
            Guillermo V.
          </h1>
          <p>
            I'm a software developer working with modern Javascript living in SLC, Utah. I enjoy building new stuff, breaking down complex web integrations and contributing to open source. Welcome to my garden!
          </p>
          <div className='my-Name' style={{ paddingLeft: '20px' }}>
            <GitHubButton
              href="https://github.com/mexcelus"
              data-size="large"
              aria-label="Follow @mexcelus on GitHub">
              Follow
            </GitHubButton>
            <a className="twitter-follow-button"
              href="https://twitter.com/mexcelus"
              data-size="large" data-show-screen-name="false" data-show-count="false">
              Follow @mexcelus
            </a>
          </div>
        </div>
      </div>
    </div>
  </Layout>
)

export default IndexPage
