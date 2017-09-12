import * as React from 'react'
import { MdsMain } from '.'

interface IComponentOwnProps {
  column1: React.ReactNode
  column2: React.ReactNode
  aside: React.ReactNode
}

type IComponentProps = Readonly<IComponentOwnProps>

const Main: React.StatelessComponent<IComponentProps> = props => {
  const { column1, column2, aside } = props
  return (
    <MdsMain>
      {column1}
      {column2}
      {aside}
    </MdsMain>
  )
}

export { Main }
