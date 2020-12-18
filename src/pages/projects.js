import React from "react"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import PostLink from "../components/postLink"
import {graphql} from 'gatsby'

const projects = ({
  data: {
    allMarkdownRemark: { edges },
  },
}) => (
  <Layout>
    <SEO title="Projects" />
    <section>
      <article class="container">
        content
      </article>
    </section>
    <section>
      <article class="container">
        {edges.map(edge => <PostLink key={edge.node.id} post={edge.node} />)}
      </article>
    </section>
  </Layout>
)

export default projects

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
