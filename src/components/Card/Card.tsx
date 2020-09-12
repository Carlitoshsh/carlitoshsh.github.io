import * as React from 'react'
import { Card } from '@rmwc/card'
import '@rmwc/card/styles'
import {useSpring, animated} from 'react-spring'

interface CustomCardProps {
    name: string,
    description: string
}

const calc = (x: number, y: number) => [
  -(y - window.innerHeight / 2) / 20,
  (x - window.innerWidth / 2) / 20,
  1.1
  ]
const trans = (x: number, y: number, s: number) =>
`perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`


export const CustomCard = (
  { name, description }: CustomCardProps,
) =>
{
  const [props, set] = useSpring(() => (
    { xys: [0, 0, 1], config: { mass: 5, tension: 350, friction: 40 } })
  )

  return (
  <> 
    <animated.div 
    onMouseMove={({ clientX: x, clientY: y }) => set({ xys: calc(x, y) })}
      onMouseLeave={() => set({ xys: [0, 0, 1] })}
      style={{ transform: props.xys.interpolate(trans) }}>
      <Card
        style={{
          border: '2px solid',
          padding: '0.5rem 1rem',
        }}>
        <h4>{name}</h4>
        <p>{description}</p>
      </Card>
    </animated.div>
  </>
  )
}