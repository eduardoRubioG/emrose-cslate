import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
        <div className="container-hero"> 
          <Hero/>
        </div>
    </Layout>
);

export default IndexPage
