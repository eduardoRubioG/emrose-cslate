import React from "react"
import styled from "styled-components"
import Img from "gatsby-image"

const PreviewButton = styled.button`
  background: transparent;
  border: none;
  padding: 0;
  margin: 0;
  height: 100%;
  width: 100%;
  transition: transform ease-in 150ms;
  &:hover{
    transform: scale(.95);
  }
  &:focus{
    outline: none;
  }
  @media screen and (max-width: 670px){
    pointer-events: none;
  }
`

const GalleryImage = styled(Img)`
  height: 100%;
`

export default function GalleryItem(props) {
  const { index, fluidImage, onImageSelect } = props
  return (
    <PreviewButton onClick={() => onImageSelect(index)}>
      <GalleryImage fluid={fluidImage} />
    </PreviewButton>
  )
}
