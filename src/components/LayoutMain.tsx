import * as React from 'react'
import styled from '@emotion/styled'
import { Footer } from './Footer'

const StyledLayoutMain = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
`

interface LayoutMainProps {
  className?: string
}

const LayoutMain: React.FC<LayoutMainProps> = ({ children, className }) => (
  <StyledLayoutMain className={className}>
    {children}
    <Footer />
  </StyledLayoutMain>
)

export default LayoutMain
