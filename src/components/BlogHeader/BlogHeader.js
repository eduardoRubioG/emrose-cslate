import React from 'react'
import Img from 'gatsby-image'
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
import './BlogHeader.css'

const BlogHeader = (props) => {
  const Bold = ({ children }) => <span className="bold">{children}</span>
  const Text = ({ children }) => <p className="align-center">{children}</p>
  const options = {
    renderMark: {
      [MARKS.BOLD]: text => <Bold>{text}</Bold>,
    },
    renderNode: {
      [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    },
  }
  const image = { 
    'base64': props.base64, 
    'src': props.src, 
    'aspectRatio': props.aspectRatio, 
    'srcSet': props.srcSet, 
    'sizes': props.sizes, 
    'tracedSVG': props.tracedSVG, 
  }
  return (
    <div className="blog-header__container">
       <Img 
          fluid={image} 
          alt="Cover image for blog post" 
        /> 
       <p className="blog-header__title">{props.title}</p>

       <div className="blog-header__bar-container">
        <div className="blog-header__bar" />
        <i className="material-icons blog-icon md-36">{props.icon}</i>
        <div className="blog-header__bar" /> 
       </div>

       <div className="blog-header__content">
         {documentToReactComponents(props.content, options)}
       </div>
    </div>
  )
}

export default BlogHeader; 
