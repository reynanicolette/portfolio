import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import styled from 'styled-components' 

const Grid = styled.div`
    min-height: 40vh;
    padding: 3rem;
    border-radius: 1rem;
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    align-items: center;
    background: rgba(25, 27, 31, .05);
`

const H1 = styled.h1`
    font-size: 3rem;
    line-height: 1.2;
    color: ${post => post.color};
`

const P = styled.p`
    width: 80%;
`

const IndexPage = ({ 
  data: { allMarkdownRemark: 
    { edges }
    ,}, 
  }) => (
  <Layout>
    <SEO title="Home" />

    {/* <Section
      key={edge.node.id}
      post={edge.node}
      title={edge.node.frontmatter.title}
      excerpt={edge.node.excerpt}
      name={'/' + edge.node.frontmatter.slug} 
      color={edge.node.frontmatter.color}
      /> */}

    {edges.map(edge => 
      <Section key={edge.node.id} post={edge.node}>
        <Grid col="2">
          <aside>
            <H1>{edge.node.frontmatter.title}</H1>
            <P>{edge.node.excerpt}</P>
            <Link to={'/' + edge.node.frontmatter.slug}>Learn More</Link>
          </aside>
        </Grid>
      </Section>
    )}
    
  </Layout>
)

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: ASC, fields: [frontmatter___date] }) {
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
