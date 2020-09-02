import * as React from 'react'
import styled from 'styled-components'

const CustomMain = styled.div`
    max-width: 60vh;
    margin: 1em auto;
`

export const MainContent: React.FC = () => (
    <>
        <CustomMain>
            <h3>༼ つ ◕_◕ ༽つ Wait for it!</h3>
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eos, eius!
            </p>
        </CustomMain>
    </>
)