import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero"
import SEO from "../components/seo"

const IndexPage = () => (
  <>
  <Layout>
    <SEO title="Home" />
    <h1>Hello world I am hard coded</h1>
  </Layout>
  <Hero/>
  </>
);

export default IndexPage
