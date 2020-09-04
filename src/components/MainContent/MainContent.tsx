import * as React from 'react'
import styled from 'styled-components'
import { CustomCard, Menu, Table } from '..'
import { projects } from './projects'
import { skills } from './skills'
import {
  List,
  SimpleListItem,
  ListDivider,
} from '@rmwc/list'

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
      <SimpleListItem
        text={skill.name}
        secondaryText={skill.description}
      />
      <ListDivider />
    </React.Fragment>,
  )

  return (
    <>
      <CustomMain>
        <h3>༼ つ ◕_◕ ༽つ</h3>
        <h3>Wait for it!</h3>
        <p>
            Hi, basically, this is my main page.
        </p>
        <h3>Projects!</h3>
        <ProjectsCards>
          {ProjectCard}
        </ProjectsCards>
        <br />
        <h3>Skills</h3>
        <List twoLine>
          {Skills}
        </List>
        <br />
        <Table />
      </CustomMain>
    </>
  )
}
