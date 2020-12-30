import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Section from "../components/section"
import SEO from '../components/seo'
import '../components/theme/css/main.css'
import styled from 'styled-components' 


const Article = styled.article`
    padding: 3rem 0;
    max-width: 960px;
    margin: 0 auto;
`

const H1 = styled.h1`
    font-size: 3rem;
    line-height: 1.2;
    color: ${post => post.color};
`

const Copy = styled.div`
`

export default function Template({
    data, // this prop will be injected by the GraphQL query below.
}) {
    const { markdownRemark } = data // data.markdownRemark holds your post data
    const { frontmatter, html } = markdownRemark
    return (
        <Layout>
          <SEO title={frontmatter.title} description={frontmatter.description} />
          <Section>
            <Article>
              <H1>{frontmatter.title}</H1>
              <Copy dangerouslySetInnerHTML={{ __html: html }} />
            </Article>
          </Section>
        </Layout>
    )
}

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        slug
        title
        description
        tags
      }
    }
  }
`