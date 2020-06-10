import React, { Component } from 'react'
import './GalleryHeader.css'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

const GalleryHeader = (props) =>  {

  const data = useStaticQuery(graphql`
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
              }
            }
          }
        }
      }
    }
  `)

  const title = data.allContentfulGallery.edges[0].node.title; 
  const image = data.allContentfulGallery.edges[0].node.coverImage.fluid; 

  return (
    <div className="gallery-header__container">
      <div className="gallery-header__title">
        <h3>{title}</h3>
      </div>
        <Img
          className="gallery-header__cover-image"
          fluid={image}
          alt="Cover image for the Weddings header"
        />
    </div>
  )
}

export default GalleryHeader 


