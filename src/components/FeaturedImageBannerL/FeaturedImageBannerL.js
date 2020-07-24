import React, { useState, useEffect } from "react"
import Img from "gatsby-image"
import "./FeaturedImageBannerL.scss"

const FeaturedImageBannerL = props => {
  function getWindowDimensions() {
    const { innerWidth: width } = window
    return {
      width,
    }
  }

  function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(
      getWindowDimensions()
    )

    useEffect(() => {
      function handleResize() {
        setWindowDimensions(getWindowDimensions())
      }
      window.addEventListener("resize", handleResize)
      return () => window.removeEventListener("resize", handleResize)
    }, [])
    return windowDimensions
  }

  const { width } = useWindowDimensions()
  const centerPiece = props.data.edges[0].node.centerPiece.fluid
  const topleft = props.data.edges[0].node.sideImages[0].fluid
  const bottomleft = props.data.edges[0].node.sideImages[1].fluid
  const topright = props.data.edges[0].node.sideImages[2].fluid
  const bottomright = props.data.edges[0].node.sideImages[3].fluid

  const bannerImages =
    width > 860
      ? [
          <Img fluid={topleft} className="top-left" />,
          <Img fluid={bottomleft} className="bottom-left" />,
          <Img
            fluid={centerPiece}
            className="FeaturedImageBannerL__image cp"
          />,
          <Img fluid={topright} className="top-right" />,
          <Img fluid={bottomright} className="bottom-right" />,
        ]
      : [<Img fluid={centerPiece} className="FeaturedImageBannerL__image cp" />]

  return <div className="FeaturedImageBannerL__container">{bannerImages}</div>
}

export default FeaturedImageBannerL
