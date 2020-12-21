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

    {edges.map(edge => 
      <Section
      key={edge.node.id}
      post={edge.node}
      title={edge.node.frontmatter.title}
      excerpt={edge.node.excerpt}
      name={'/' + edge.node.frontmatter.slug} 
      color={edge.node.frontmatter.color}
      />
    )}
    
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
            color
          }
        }
      }
    }
  }
`
