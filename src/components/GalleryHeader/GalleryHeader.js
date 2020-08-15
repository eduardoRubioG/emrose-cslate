import React, { Component } from "react"
import Img from "gatsby-image"
import { navigate } from 'gatsby'
import "./GalleryHeader.scss"

export default class GalleryHeader extends Component {
  constructor(props) {
    super(props)
    const image = {
      base64: props.base64,
      src: props.src,
      aspectRatio: props.aspectRatio,
      srcSet: props.srcSet,
      sizes: props.sizes,
      tracedSVG: props.tracedSVG,
    }
    this.state = {
      _title: props.title,
      _image: image,
      _slug: props.slug,
      containerClass: `gallery-header__container-${props.align}`,
    }
  }
  render() {
    console.log("Here", this.state.containerClass);
    return (
      <div className={this.state.containerClass} onClick={()=>{navigate(`/portfolio/${this.state._slug}`)}}>
        <div className="gallery-header__title">
          <h3>{this.state._title}</h3>
        </div>
        <Img
          className="gallery-header__cover-image"
          fluid={this.state._image}
          alt="Featured gallery header"
        />
      </div>
    )
  }
}
