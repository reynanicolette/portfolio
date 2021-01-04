import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import SEO from "../components/seo"
import {graphql} from 'gatsby'
import styled from 'styled-components' 


const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(${props => props.col}, 1fr);
    grid-gap: 2rem;
    align-items: start;
`

const Preview = styled.article`
    min-height: 40vh; 
    padding: 3rem;
    border-radius: 1rem;
    background: #f3f3f4;
`

const H1 = styled.h1`
    font-size: 3rem;
    line-height: 1.2;
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
    <Section>
    <Grid col="2">
    {edges.map(edge => 
        <Preview className="shadow" key={edge.node.id} post={edge.node}>
          <H1>{edge.node.frontmatter.title}</H1>
          <P>{edge.node.excerpt}</P>
          <Link to={'/' + edge.node.frontmatter.slug}>Learn More</Link>
        </Preview>
    )}
    <Preview className="shadow">
      <H1>Does this work</H1>
    </Preview>
    </Grid>
    </Section>
    
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
          }
        }
      }
    }
  }
`
