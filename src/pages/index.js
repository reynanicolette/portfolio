import React from "react"

import PostLink from "../components/postLink"
import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
// import PostLink from "../components/postLink"
import {graphql} from 'gatsby'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />

    <Section
      title="A Guide to Flexbox"
      text="The Flexbox Module is a one dimensional layout system used to create responsive layouts. This guide was made for CSS beginners who haven't learned the basics of layout yet."
      name="flexbox"  
      />

    <Section
      title="A Guide to CSS Grid"
      text="The Flexbox Module is a two dimensional layout system used to create responsive layouts. This guide was made for CSS beginners who have learned Flexbox and want to learn about the alternate system"/>

    <Section
      title="A Guide to Sass"
      text="Sass is a CSS preprocessor created to make the experience of styling your web pages a little easier than what's currently available for CSS."/>
    
    {edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
    
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          excerpt(pruneLength: 250)
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            slug
            title
          }
        }
      }
    }
  }
`
