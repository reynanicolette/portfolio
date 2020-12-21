import React from 'react'
import styled from 'styled-components'
import { Link } from "gatsby"

const Row = styled.section`
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
`
const Container = styled.article`
    width: 90%;
    max-width: 1200px;
    margin: 0 auto;
`

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

const Button = styled.a`
    display: inline-block;
`

const Section = ({ post }) => (
    <Row>
        <Container>
            <Grid col="2">
                <aside>
                    <H1>{post.frontmatter.title}</H1>
                    <P>{post.excerpt}</P>
                    <Link to={'/' + post.frontmatter.slug}>Learn More</Link>
                </aside>
            </Grid>
        </Container>
    </Row>
)

export default Section