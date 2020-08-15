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

const IndexPage = ({data}) => {
  const pageText = data.allContentfulHomePage.edges[0].node; 
  const galleryPage = data.allContentfulGallery.edges; 
  return (
    <Layout>
      <SEO title="Home" />
        <Hero/>
        <SectionHeader 
            title={pageText.sectionHeaderOne}
            content={pageText.sectionHeaderOneContent.sectionHeaderOneContent}
        />
        <Icons 
            icons={['camera_alt','camera_alt','camera_alt']}
            iconColors={['primary','secondary','highlight']}
            iconSizes={['48','48','48']}
        />
        <FeaturedImageBannerLarge data={data.allContentfulFeaturedImageBannerLarge}/>
        <SectionHeader title={pageText.sectionHeaderTwo} />
            <GalleryHeader 
                align={'right'}
                data={galleryPage[0].node}
            />
            <GalleryHeader 
                align={'left'}
                data={galleryPage[1].node}
            />

        <Button content={pageText.portfolioButton} to="/portfolio/" pos={true}></Button>
        <FeaturedImageBannerSmall data={data.allContentfulFeaturedImageBannerSmall}/>
        <HomeBlogSection /> 
        <SectionHeader title={pageText.sectionHeaderThree}/>
        <ContactSection content={pageText.contactSectionContent.contactSectionContent}/> 
    </Layout>
);}

export const query = graphql`
query { 
  allContentfulHomePage(limit: 1) {
    edges {
      node {
        sectionHeaderOne
        sectionHeaderOneContent {
          sectionHeaderOneContent
        }
        sectionHeaderTwo
        portfolioButton
        sectionHeaderThree
        contactSectionContent {
          contactSectionContent
        }
      }
    }
  }
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
