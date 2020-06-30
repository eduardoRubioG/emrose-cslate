import React, { useEffect } from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import HumansImage from "../images/404-humans.png"

import './page-styling/404.scss'

const NotFoundPage = () => {

  return (
  <Layout>
    <SEO title="not-found: Not found" />
    <div className="not-found__container">
      <h1 className="not-found__title">404</h1>
      <p className="not-found__content">Yikes! Looks like the page you're looking for isn't here... This is so awkward... Go to the menu and try something else?</p>
      <img className="not-found__img" src={HumansImage} alt='Humans image'/>
    </div>
  </Layout>
)}

export default NotFoundPage
