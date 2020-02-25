import * as React from 'react'
import { Link } from 'gatsby'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { Intro } from '../components/Intro'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Intro />
        <Link to="/about">About</Link>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
