import React from 'react'
import styled from 'styled-components'

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

const Section = ({ children }) => (
    <Row>
        <Container>
            {children}
        </Container>
    </Row>
)

export default Section