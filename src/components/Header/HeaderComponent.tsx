import * as React from 'react'
import styled from 'styled-components'

const Brand = styled.h2`
    margin-block-end: 0;
`

const HeaderWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    border-bottom: 1px solid blue;
`

export const HeaderComponent = () => (
    <>
        <HeaderWrapper>
            <Brand>
                CAGH
            </Brand>
        </HeaderWrapper>
    </>
)