import React from "react"

import Layout from "../components/layout"
import Footer from "../components/footer"
import SubForm from "../components/subform"

// import "../components/twitter"

const ContactPage = () => (
  <Layout>
    <br></br>
    <br></br>
    
    <div className="main-container">
      <div className="contact-me-container">
        <div className="contact-me">
          <SubForm />
          <p>
            You can also find me at:
            <br></br>
            <br></br>
            <ul>
              <li>
                  <b>github:</b> <a href="https://github.com/mexcelus"><b>/mexcelus</b></a>
              </li>
              <li>
                  <b>twitter:</b> <a href="https://twitter.com/mexcelus"><b>/mexcelus</b></a>
              </li>
              <li>
                  <b>linkedin:</b> <a href="https://www.linkedin.com/in/guillermo-villalta-024b3693/"><b>guillermo villalta</b></a>
              </li>
            </ul>
          </p>
          <br></br>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
    </div>
    <Footer />
  </Layout>
)

export default ContactPage
