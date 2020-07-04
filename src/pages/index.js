import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import GalleryHeader from "../components/GalleryHeader/GalleryHeader"
import HomeBlogSection from "../components/HomeBlogSection/HomeBlogSection"
import ContactSection from "../components/ContactSection/ContactSection"
import Icons from "../components/Icons/Icons"

const IndexPage = ({data}) => (
    <Layout>
      <SEO title="Home" />
      <div id="section__home"/>
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
            <GalleryHeader 
                align={'right'}
                title={data.allContentfulGallery.edges[0].node.title}
                {...data.allContentfulGallery.edges[0].node.coverImage.fluid}
            />
            <GalleryHeader 
                align={'left'}
                title={data.allContentfulGallery.edges[0].node.title}
                {...data.allContentfulGallery.edges[0].node.coverImage.fluid}
            />


        <SectionHeader title="Journal" />
        <HomeBlogSection /> 
        <div id="section__contact-me"/>
        <SectionHeader title="Lets connect"/>
        {/* <Forms /> */}
        <ContactSection /> 
    </Layout>
);

export const query = graphql`
query { 
  allContentfulGallery(filter: {title: {eq: "Weddings"}}) {
    edges {
      node {
        title
        coverImage {
          fluid {
            base64 
            aspectRatio 
            src 
            srcSet 
            sizes 
            tracedSVG
          }
        }
      }
    }
  }
}
`

export default IndexPage
