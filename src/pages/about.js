import React from "react"
import Img from "gatsby-image"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import Layout from "../components/layout"
import ContactSection from "../components/ContactSection/ContactSection"
import "./page-styling/about.scss"

export default function about({ data }) {
  const pageData = data.allContentfulAboutPage.edges[0].node
  return (
    <Layout>
      <div className="about__header-text">
        <h1>Emma Rose</h1>
      </div>
      <section className="about__intro-grid">
        <Img fluid={pageData.profileImage.fluid} className="about__main-img" />
        <div class="about__intro-text">
          <p>{pageData.description.description}</p>
          <p>
            {pageData.subtext
              ? pageData.subtext
              : ""}
          </p>
        </div>
        <Img fluid={pageData.subImage.fluid} className="about__sub-img" />
      </section>

      <section className="about__contact-section">
        <SectionHeader title="Get in touch"/>
        <ContactSection />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query {
    allContentfulAboutPage(limit: 1) {
      edges {
        node {
          description {
            description
          }
          pageTitle
          profileImage {
            fluid(cropFocus: FACES, resizingBehavior: CROP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
          subImage {
            fluid(resizingBehavior: CROP) {
              ...GatsbyContentfulFluid_withWebp
            }
          }
        }
      }
    }
  }
`
