import React from 'react'
import Img from 'gatsby-image'
import styled from 'styled-components'
import './ImageBanner.scss'
import { Link, graphql } from 'gatsby';


export default function ImageBanner(props) {
  const BackgroundImage = styled(Img)`
    filter: blur(8px);
    grid-column: 1 / 4;
    grid-row: 1 / 2;
    transition: all 0.5s ease;
    opacity: 70%;
    transition: filter ease 300ms, opacity ease 300ms;
    max-height: 250px;
    z-index: 1;
  `
  const slug = (props.slug) ? props.slug : props.title.toLowerCase(); 

  return (
    <div className="image-banner__container">
      <Link to={slug} className="image-banner__link"></Link>
      <BackgroundImage
      className="image-banner__image"
      fluid={props.image} alt="Gallery alt" fadeIn={true}/>
      <h1 className="image-banner__title">{props.title}</h1>
    </div>
  )
}
