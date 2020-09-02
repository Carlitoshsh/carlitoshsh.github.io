import * as React from 'react'
import styled from 'styled-components'
import { CustomCard } from '..'
import { projects } from './projects'

const CustomMain = styled.div`
    max-width: 70vh;
    margin: 1em auto;
`

const ProjectsCards = styled.div `
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`


export const MainContent: React.FC = () => 
{
    const ProjectCard = projects.map((project, index) => 
        <React.Fragment key={index}>
           <CustomCard
                name={project.name}
                description={project.description}
           />
        </React.Fragment>
    )

    return (
        <>
            <CustomMain>
                <h3>༼ つ ◕_◕ ༽つ Wait for it!</h3>
                <p>
                    Hi, basically, this is my main page.
                </p>
                <h3>Projects!</h3>
                <ProjectsCards>
                    {ProjectCard}
                </ProjectsCards>
            </CustomMain>
        </>
    )
}