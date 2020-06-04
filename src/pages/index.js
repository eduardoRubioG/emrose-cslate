import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"
import SectionHeader from "../components/SectionHeader/SectionHeader"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
          <Hero/>
          <SectionHeader 
              title="Welcome to my page!"
          />
    </Layout>
);

export default IndexPage
