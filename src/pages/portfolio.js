import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ImageBanner from "../components/ImageBanner/ImageBanner"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import './page-styling/portfolio.scss'

const PortfolioPage = ({data}) => {
  const galleries = data.allContentfulGallery.edges; 
  const galleryCoverImages = galleries.map((gallery) => { 
    return(<ImageBanner key={gallery.node.title} title={gallery.node.title} image={gallery.node.coverImage.fluid} slug={gallery.node.slug}/>)
  })
  return(
  <Layout>
    <SEO title="Portfolio" />
    <section className="portfolio__section-wrapper">
      <SectionHeader title="Portfolio"/>
      <p className="portfolio__content">Veniam culpa id elit ad quis laboris pariatur enim proident commodo. Sunt consectetur non et Lorem sint nulla voluptate duis veniam excepteur proident dolor. Laboris dolore aliqua ea pariatur excepteur. Dolor in tempor velit culpa ad sint eiusmod tempor.</p>
      {galleryCoverImages}
    </section>
  </Layout>
  )
}

export const query = graphql`
query { 
  allContentfulGallery {
    edges {
      node {
        title
        slug
        coverImage {
          fluid(maxWidth: 1900) {
            sizes
            src
            srcSet
            aspectRatio
            tracedSVG
          }
        }
      }
    }
  }
}
`
export default PortfolioPage
