import * as React from 'react'
import styled from 'styled-components'

const Brand = styled.h2`
    margin-block-end: 0;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid ${
  ({ theme }: PropsTheme) => theme.colors.secondary
};
    padding: 1em 2em;
`

export const HeaderComponent: React.FC = () => (
  <>
    <HeaderWrapper>
      <Brand>
                CAGH
      </Brand>
    </HeaderWrapper>
  </>
)
