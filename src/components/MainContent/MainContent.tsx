import * as React from 'react'
import styled from 'styled-components'
import { CustomCard, Menu, Table } from '..'
import { projects } from './projects'
import { skills } from './skills'

const CustomMain = styled.div`
    max-width: 70vh;
    margin: 1em auto;
    padding: 1rem;
`

const ProjectsCards = styled.div`
    display: grid;
    grid-gap: 1rem;
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
`

const SkillsContainer = styled.div`
    display: grid;
    grid-gap: 1rem;
`

export const MainContent: React.FC = () => {
  const ProjectCard = projects.map((project, index) =>
    <React.Fragment key={index}>
      <CustomCard
        name={project.name}
        description={project.description}
      />
    </React.Fragment>,
  )

  const Skills = skills.map((skill, index) =>
    <React.Fragment key={index}>
      <CustomCard
        name={skill.name}
        description={skill.description}
        icon={skill.icon}
      />
    </React.Fragment>,
  )

  return (
    <>
      <CustomMain>
        <h3>Hi, my name is Carlos!</h3>
        <h3>Wait for it! (Yes, I'm a HIMYM fan!)</h3>
        <p>
          Well, basically, this is my main page.
        </p>
        <h3>Projects!</h3>
        <ProjectsCards>
          {ProjectCard}
        </ProjectsCards>
        <br />
        <h3>Skills</h3>
        <SkillsContainer>
          {Skills}
        </SkillsContainer>
        <br />
        {/* <Table /> */}
      </CustomMain>
    </>
  )
}
