import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import PostLink from "../components/postLink"
import {graphql} from 'gatsby'

const IndexPage = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Home" />
    <section>
      <article class="container">
      contnt
      </article>
    </section>
    <section>
      <article class="container">
        {edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
      </article>
    </section>
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
