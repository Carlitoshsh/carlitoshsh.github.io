import * as React from 'react'
import styled from 'styled-components'

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-top: 1px solid ${({ theme }: PropsTheme) => theme.colors.secondary};
    height: 30px;
`

export const FooterComponent = () => (
    <>
        <HeaderWrapper>
            <small>Designed by Carlos</small>
        </HeaderWrapper>
    </>
)