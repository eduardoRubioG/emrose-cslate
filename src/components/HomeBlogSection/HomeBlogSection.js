import React from "react"
import BlogHeader from "../BlogHeader/BlogHeader"
import SectionHeader from "../SectionHeader/SectionHeader"
import "./HomeBlogSection.css"
import { useStaticQuery, graphql } from "gatsby"

const HomeBlogSection = () => {
  const data = undefined; 
  // const data = useStaticQuery(graphql`
  //   query {
  //     allContentfulBlogPost(
  //       filter: { featuredOnHomePage: { eq: true } }
  //       limit: 1
  //     ) {
  //       edges {
  //         node {
  //           title
  //           content {
  //             json
  //           }
  //           coverImage {
  //             fluid {
  //               base64
  //               aspectRatio
  //               src
  //               srcSet
  //             }
  //           }
  //         }
  //       }
  //     }
  //   }
  // `)
  return data ? (
    <div></div>
  ) : (
    <>
      {/* <SectionHeader title="Journal" />
      <div className="home-blog-section__container">
        <BlogHeader
          icon="sports_tennis"
          title={data.allContentfulBlogPost.edges[0].node.title}
          {...data.allContentfulBlogPost.edges[0].node.coverImage.fluid}
          content={data.allContentfulBlogPost.edges[0].node.content.json}
        />
        <BlogHeader
          icon="sports_tennis"
          title={data.allContentfulBlogPost.edges[0].node.title}
          {...data.allContentfulBlogPost.edges[0].node.coverImage.fluid}
          content={data.allContentfulBlogPost.edges[0].node.content.json}
        />
      </div> */}
    </>
  )
}

export default HomeBlogSection
