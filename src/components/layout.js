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
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
