import React from 'react'
import PropTypes from 'prop-types'
import Img from 'gatsby-image'
import Layout from '../../components/layout'
import { graphql } from 'gatsby'
import './SubGallery.scss'

const SubGallery = ({data}) => {
  const pageData = data.allContentfulSubGallery.edges[0].node; 
  const pagePhotos = pageData.photos.map((photo) => { 
    return(<Img fluid={photo.fluid} />);
  })
  return (
    <Layout>
      <section className="sub-gallery__intro-container">

        <div className="sub-gallery__cover-image-container">
          <Img fluid={pageData.coverImage.fluid} className="sub-gallery__cover-image"/>
          <h2 className="sub-gallery__title">{pageData.title}</h2>
        </div>
        <p>{pageData.description.description}</p>
        <p>{pageData.date}</p>

      </section>

      <section className="sub-gallery__image-showcase">
        {pagePhotos}
      </section>
    </Layout>
  )
}

SubGallery.propTypes = { 
  data: PropTypes.object.isRequired,
}
export default SubGallery; 
export const query = graphql`
  query subGalleryQuery($slug: String!) { 
    allContentfulSubGallery(filter: {slug: {eq: $slug}}) { 
      edges { 
        node { 
          title
          description {
            description
          }
          date(formatString: "MM/YYYY")
          coverImage {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          photos {
            fluid {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`