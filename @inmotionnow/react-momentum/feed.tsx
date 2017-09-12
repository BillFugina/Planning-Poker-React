import * as React from 'react'
import { MdsFeed } from '.'

interface IComponentOwnProps {
  items: React.ReactNode[]
}

type IComponentProps = Readonly<IComponentOwnProps>

const Feed: React.StatelessComponent<IComponentProps> = props => {
  const { items } = props
  return (
    <MdsFeed>
      {items}
    </MdsFeed>
  )
}

export { Feed }
