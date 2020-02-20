import * as React from 'react'

import { GithubIcon, LinkedinIcon } from '../assets/icons'
import { StyledFooter, StyledSocialMediaList, StyledImgIcon, StyledLink } from './styled'

export const Footer: React.FC = () => (
  <StyledFooter>
    <StyledSocialMediaList>
      <li>
        <StyledLink href="https://github.com/tomekz">
          <StyledImgIcon src={GithubIcon} alt="github" />
        </StyledLink>
      </li>
      <li>
        <StyledLink href="https://www.linkedin.com/in/tzadrozny/">
          <StyledImgIcon src={LinkedinIcon} alt="linkedin" />
        </StyledLink>
      </li>
    </StyledSocialMediaList>
  </StyledFooter>
)
