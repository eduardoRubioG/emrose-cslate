import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import GalleryHeader from "../components/GalleryHeader/GalleryHeader"
import Icons from "../components/Icons/Icons"

const IndexPage = ({data}) => (
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
            <GalleryHeader 
                title={data.allContentfulGallery.edges[0].node.title}
                {...data.allContentfulGallery.edges[0].node.coverImage.fluid}
            />
            <GalleryHeader 
                title={data.allContentfulGallery.edges[0].node.title}
                {...data.allContentfulGallery.edges[0].node.coverImage.fluid}
            />
        <SectionHeader title="Journal" />
        <SectionHeader title="Lets connect" />
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
