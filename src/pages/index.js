import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import Icons from "../components/Icons/Icons"

const IndexPage = () => (
    <Layout>
      <SEO title="Home" />
          <Hero/>
          <SectionHeader 
              title="Welcome to my page!"
              content="Hello world here is the section header hehe"
          />
        <Icons icons={['a','b','hotdog']}/>   
    </Layout>
);

export default IndexPage
