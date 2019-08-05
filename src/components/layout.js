/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import config from '../../data/SiteConfig'
import Helmet from 'react-helmet'

import Navigation from './menu'
import "./layout.scss"

const Layout = ({ children }) => {

  return (
    <>
      <Helmet>
      </Helmet>
      <Navigation menuLinks={config.menuLinks}>
      </Navigation>
        <main>{children}</main>
        
      <footer className="footer container">
        <a href="https://ko-fi.com/taniarascia" target="_blank" rel="noopener noreferrer">
          Ko-Fi
        </a>
        <a href="https://patreon.com/taniarascia" target="_blank" rel="noopener noreferrer">
          Patreon
        </a>
        <a href="https://twitter.com/taniarascia" target="_blank" rel="noopener noreferrer">
          Twitter
        </a>
        <a href="https://github.com/taniarascia" target="_blank" rel="noopener noreferrer">
          GitHub
        </a>
        <a href="https://www.taniarascia.com/rss.xml" target="_blank" rel="noopener noreferrer">
          RSS
        </a>
        <a
          href="https://github.com/taniarascia/taniarascia.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          View source
        </a>
        </footer>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
