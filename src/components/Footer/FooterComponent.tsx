import * as React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid ${({ theme }: PropsTheme) => theme.colors.secondary};
    height: 30px;
    padding: 1em 2em;
`

const DesignedBy = styled.small`
    margin-left: auto;   
`

export const FooterComponent: React.FC = () => (
  <>
    <HeaderWrapper>
      <small>{new Date().getFullYear()}</small>
      <DesignedBy>Designed by CAGH</DesignedBy>
    </HeaderWrapper>
  </>
)
