import * as React from 'react'
import { Card } from '@rmwc/card'
import '@rmwc/card/styles'

interface CustomCardProps {
    name: string,
    description: string
}

export const CustomCard = (
  { name, description }: CustomCardProps,
) =>
  (
    <>
      <Card
        style={{
          border: '1px solid',
          padding: '0.5rem 1rem',
        }}>
        <h4>{name}</h4>
        <p>{description}</p>
      </Card>
    </>
  )
