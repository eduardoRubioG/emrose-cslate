import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Hero from "../components/Hero/Hero"
import SEO from "../components/seo"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import GalleryHeader from "../components/GalleryHeader/GalleryHeader"
import HomeBlogSection from "../components/HomeBlogSection/HomeBlogSection"
import ContactSection from "../components/ContactSection/ContactSection"
import Button from "../components/Button/Button"
import Icons from "../components/Icons/Icons"
import FeaturedImageBannerLarge from "../components/FeaturedImageBannerL/FeaturedImageBannerL"
import FeaturedImageBannerSmall from "../components/FeaturedImageBannerS/FeaturedImageBannerS"

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
        <FeaturedImageBannerLarge data={data.allContentfulFeaturedImageBannerLarge}/>
        <SectionHeader title="Check out collections" />
            <GalleryHeader 
                align={'right'}
                title={data.allContentfulGallery.edges[0].node.title}
                {...data.allContentfulGallery.edges[0].node.coverImage.fluid}
                slug={data.allContentfulGallery.edges[0].node.slug}
            />
            <GalleryHeader 
                align={'left'}
                title={data.allContentfulGallery.edges[1].node.title}
                {...data.allContentfulGallery.edges[1].node.coverImage.fluid}
                slug={data.allContentfulGallery.edges[1].node.slug}
            />

        <Button content="Visit my full portfolio" to="/portfolio/" pos={true}></Button>
        <FeaturedImageBannerSmall data={data.allContentfulFeaturedImageBannerSmall}/>
        <HomeBlogSection /> 
        <SectionHeader title="Lets connect"/>
        <ContactSection /> 
    </Layout>
);

export const query = graphql`
query { 
  allContentfulGallery(limit: 2) {
    edges {
      node {
        slug
        title
        coverImage {
          fluid(cropFocus: FACES, resizingBehavior: CROP){ 
            ...GatsbyContentfulFluid_withWebp
        }
      }
    }
  }
  }
  allContentfulFeaturedImageBannerLarge(limit: 1) {
    edges {
      node {
        centerPiece {
          fluid(cropFocus: FACES, resizingBehavior: CROP){ 
            ...GatsbyContentfulFluid_withWebp
          }
        }
        sideImages {
          fluid(cropFocus: FACES, resizingBehavior: CROP){
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
  allContentfulFeaturedImageBannerSmall(limit: 1) {
    edges {
      node {
        images {
          fluid(cropFocus: FACES, resizingBehavior: CROP) {
            ...GatsbyContentfulFluid_withWebp
          }
        }
      }
    }
  }
}
`

export default IndexPage
