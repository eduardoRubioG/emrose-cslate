import React from "react"
import Img from "gatsby-image"
import SectionHeader from "../components/SectionHeader/SectionHeader"
import Layout from "../components/layout"
import ContactSection from "../components/ContactSection/ContactSection"
import "./page-styling/about.scss"

export default function about({ data }) {
  const pageData = data.allContentfulAboutPage.edges[0].node
  console.log("ABOUT PAGE", pageData)
  return (
    <Layout>
      <section className="about__section bd">
        <div>
          <SectionHeader title={pageData.pageTitle} />
        </div>
        {/* Grid */}
        <div className="about__grid-content">
          <div className="about__desc">{pageData.description.description}</div>
          <div className="about__img-wrapper">
            <Img className="about__img" fluid={pageData.profileImage.fluid} />
          </div>
        <div className="about__contact">
          {/* <SectionHeader title="Get in touch!" /> */}
          <ContactSection />
        </div>
        </div>
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
        }
      }
    }
  }
`
