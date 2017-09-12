import * as React from 'react'
import { MdsMediaCardImage } from './mds-media-card-image'
import { MdsMediaCardInfo } from './mds-media-card-info'
import { MdsMediaCardMeta } from './mds-media-card-meta'
import { MdsMediaCardMetaItem } from './mds-media-card-meta-item'
import { MdsMediaCardSubtitle } from './mds-media-card-subtitle'
import { MdsMediaCardTitle } from './mds-media-card-title'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMediaCard: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props

  return (
    <figure className="mds-c-media-card">
      {children}
    </figure>
  )
}

MdsMediaCard.defaultProps = { }

export { MdsMediaCard, MdsMediaCardImage, MdsMediaCardInfo, MdsMediaCardSubtitle, MdsMediaCardTitle,
  MdsMediaCardMeta, MdsMediaCardMetaItem }
