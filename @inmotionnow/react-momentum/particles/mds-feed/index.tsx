import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFeed: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <ul className="mds-c-feed">
      {children}
    </ul>
  )
}

export { MdsFeedAvatar } from './mds-feed-avatar'
export { MdsFeedContent } from './mds-feed-content'
export { MdsFeedDescription } from './mds-feed-description'
export { MdsFeedItem } from './mds-feed-item'
export { MdsFeedName } from './mds-feed-name'
export { MdsFeedQuote } from './mds-feed-quote'
export { MdsFeedToolbar } from './mds-feed-toolbar'
export { MdsFeedTimestamp } from './mds-feed-timestamp'
export { MdsFeedStatus } from './mds-feed-status'

export { MdsFeed }
