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
              content="Sit culpa proident fugiat tempor reprehenderit officia id velit."
          />
        <Icons 
            icons={['face','camera','face']}
            iconColors={['blue','red','yellow']}
            iconSizes={['36','36','36']}
        />   
    </Layout>
);

export default IndexPage
