import * as React from 'react'

import Page from '../components/Page'
import Container from '../components/Container'
import IndexLayout from '../layouts'

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <h1>Tomasz Zadrozny</h1>
        <div>
          <span>/</span>
        </div>
        <h2>Web developer</h2>
      </Container>
    </Page>
  </IndexLayout>
)

export default IndexPage
