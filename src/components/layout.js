/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Footer from "../components/Footer/Footer"
import Nav from "./Nav/Nav"
import { useStaticQuery, graphql } from "gatsby"
import "./bootstrap.min.css"
import "./layout.css"


const Layout = ({ children }) => 
  <>
    <Nav/>
    {children}
    <Footer/>
  </>;

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
