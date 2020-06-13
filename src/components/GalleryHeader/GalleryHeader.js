import React, { Component } from 'react'
import './GalleryHeader.css'
import { graphql } from 'gatsby'
import { useStaticQuery } from 'gatsby';
import Img from "gatsby-image"

export default class GalleryHeader extends Component {
  constructor(props){ 
    super(props); 
    console.log(props.image); 
    this.state = { 
      _title: props.title,
      _image: props.image,
    }
  }
  render() {
    return (
      <div className="gallery-header__container">
        {this.state._title}
        {this.state._image}
      </div>
    )
  }
}


// const GalleryHeader = (props) => {
//   return (
//     <div className="gallery-header__container">
//     {props.title}
//     {props.thedata.coverImage.fluid}
//   </div>
//   )
// }



