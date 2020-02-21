import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'
import { Intro } from '../components/Intro'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Intro />
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
