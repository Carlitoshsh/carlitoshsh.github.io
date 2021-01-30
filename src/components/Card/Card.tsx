import * as React from 'react'
import styled from 'styled-components'

interface CustomCardProps {
  name: string,
  description: string,
  icon: string
}

const CustomDiv = styled.div`
border: 2px solid darkblue;
  padding: 0.8rem;
  border-radius: 0.3rem;
  background-image: linear-gradient(45deg, cornflowerblue 50%, transparent 50%);
	background-position: 100%;
	background-size: 400%;
	transition: background 300ms ease-in-out;
  i{
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  :hover {
    background-position: 0;
	  color: white;
  }
`

export const CustomCard = (
  { name, description, icon = '' }: CustomCardProps,
) => {
  return (
    <>
      <CustomDiv>
        {icon != '' &&
          <i className={icon}></i>
        }
        <h4>{name}</h4>
        <p>{description}</p>
      </CustomDiv>
    </>
  )
}
