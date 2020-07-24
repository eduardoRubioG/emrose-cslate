import React from "react"
import Img from "gatsby-image"
import "./FeaturedImageBannerS.scss"

const FeaturedImageBannerL = props => {
  const centerPiece = props.data.edges[0].node.images[0].fluid;
  const left = props.data.edges[0].node.images[1].fluid;
  const right = props.data.edges[0].node.images[2].fluid;

  return (
    <div className="FeaturedImageBannerS__container">
      <Img fluid={left} className="img"/>
      <Img
        fluid={centerPiece}
        className="img"
      />
      <Img fluid={right} className="img"/>
    </div>
  )
}

export default FeaturedImageBannerL
