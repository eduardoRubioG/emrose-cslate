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
            icons={['camera_alt','camera_alt','camera_alt']}
            iconColors={['primary','secondary','highlight']}
            iconSizes={['48','48','48']}
        />
        <SectionHeader title="Check out collections" />
            {/* <GalleryHeader title="Weddings" /> */}

        <SectionHeader title="Want to see more?" />
        <SectionHeader title="Journal" />
        <SectionHeader title="Lets connect" />
    </Layout>
);

export default IndexPage
