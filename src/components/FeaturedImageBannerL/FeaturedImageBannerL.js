import React from "react"
import Media from "react-media"
import Img from "gatsby-image"
import "./FeaturedImageBannerL.scss"

const FeaturedImageBannerL = props => {
  const centerPiece = props.data.edges[0].node.centerPiece.fluid
  const topleft = props.data.edges[0].node.sideImages[0].fluid
  const bottomleft = props.data.edges[0].node.sideImages[1].fluid
  const topright = props.data.edges[0].node.sideImages[2].fluid
  const bottomright = props.data.edges[0].node.sideImages[3].fluid

  return (
    <>
      <Media
        query="(max-width: 860px)"
        render={() => (
          <div className="FeaturedImageBannerL__container">
            <Img
              fluid={centerPiece}
              className="FeaturedImageBannerL__image cp"
            />
          </div>
        )}
      />
      <Media
        query="(min-width: 860px)"
        render={() => (
          <div className="FeaturedImageBannerL__container">
            <Img fluid={topleft} className="top-left" />
            <Img fluid={bottomleft} className="bottom-left" />
            <Img
              fluid={centerPiece}
              className="FeaturedImageBannerL__image cp"
            />
            <Img fluid={topright} className="top-right" />
            <Img fluid={bottomright} className="bottom-right" />
          </div>
        )}
      />
    </>
  )
}

export default FeaturedImageBannerL
