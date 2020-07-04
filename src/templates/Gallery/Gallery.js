import React from 'react'
import PropTypes from 'prop-types'
import { graphql } from 'gatsby'
const Gallery = ({data}) => {
  const pageData = data.allContentfulGallery.edges[0].node; 
  return (
    <div>
      <h1>This is a gallery page -- {pageData.title}</h1>
    </div>
  )
}
Gallery.propTypes = { 
  data: PropTypes.object.isRequired,
}
export default Gallery; 
export const query = graphql`
  query galleryQuery($slug: String!) { 
    allContentfulGallery(filter: {slug: {eq: $slug}}) { 
      edges { 
        node { 
          title
        }
      }
    }
  }
`