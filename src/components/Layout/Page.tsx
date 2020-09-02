import * as React from 'react'
import styled from 'styled-components'
import {
    Header,
    Left,
    Main,
    Right,
    Footer,
} from '.'
import { MainContent } from '../MainContent'
import { HeaderComponent, FooterComponent } from '..'


const GridLayout = styled.div`
    height: 100vh;
    display: grid;
    grid-template: auto 1fr auto / auto 1fr auto;
`

export const Page: React.FC = () => (
    <GridLayout>
        <Header>
            <HeaderComponent />
        </Header>
        <Left></Left>
        <Main>
            <MainContent />
        </Main>
        <Right></Right>
        <Footer>
            <FooterComponent />
        </Footer>
    </GridLayout>
)