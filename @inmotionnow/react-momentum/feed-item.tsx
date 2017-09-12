import * as React from 'react'
import { MdsFeedItem } from '.'

interface IComponentOwnProps {
  avatar: React.ReactNode
  content: React.ReactNode
  status?: React.ReactNode
}

type IComponentProps = Readonly<IComponentOwnProps>

const FeedItem: React.StatelessComponent<IComponentProps> = props => {
  const { avatar, content, status, children } = props
  return (
    <MdsFeedItem {...{hasStatus: !!status}} >
      {avatar}
      {content}
      {status}
      {children}
    </MdsFeedItem>
  )
}

export { FeedItem }
