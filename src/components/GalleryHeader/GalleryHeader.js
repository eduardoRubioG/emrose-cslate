import React, { Component } from 'react'
import './GalleryHeader.css'
import Img from "gatsby-image"

export default class GalleryHeader extends Component {
  constructor(props){ 
    super(props); 
    const image = { 
      'base64': props.base64, 
      'src': props.src, 
      'aspectRatio': props.aspectRatio, 
      'srcSet': props.srcSet, 
      'sizes': props.sizes, 
      'tracedSVG': props.tracedSVG, 
    }
    this.state = { 
      _title: props.title,
      _image: image,
      containerClass: 'gallery-header__container ' + props.align, 
    }
  }
  render() {
    return (
      <div className={this.state.containerClass}>
      <div className="gallery-header__title">
        <h3>{this.state._title}</h3>
      </div>
        <Img
          className="gallery-header__cover-image"
          fluid={this.state._image}
          alt="Cover image for the Weddings header"
        />
    </div>
    )
  }
}
