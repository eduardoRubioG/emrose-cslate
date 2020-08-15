import React, { Component } from "react"
import Img from "gatsby-image"
import { navigate } from 'gatsby'
import "./GalleryHeader.scss"

export default class GalleryHeader extends Component {
  constructor(props) {
    super(props); 
    this.state = {
      data: props.data, 
      containerClass: `gallery-header__container-${props.align}`,
    }
  }
  render() {
    return (
      <div className={this.state.containerClass} onClick={()=>{navigate(`/portfolio/${this.state.data.slug}`)}}>
        <div className="gallery-header__title">
          <h3>{this.state.data.title}</h3>
        </div>
        <Img
          className="gallery-header__cover-image"
          fluid={this.state.data.coverImage.fluid}
          alt="Featured gallery header"
        />
      </div>
    )
  }
}
