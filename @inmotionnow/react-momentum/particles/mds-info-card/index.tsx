import * as React from 'react'
import { IMdsComponentTag } from '../..'
import { MdsInfoCardIcon } from './mds-info-card-icon'
import { MdsInfoCardInfo } from './mds-info-card-info'
import { MdsInfoCardSubtitle } from './mds-info-card-subtitle'
import { MdsInfoCardTitle } from './mds-info-card-title'

export type IMdsInfoCardTag = IMdsComponentTag<'div' | 'button'>

interface IComponentOwnProps {
  tag?: IMdsInfoCardTag,
  popoutId?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsInfoCard: React.StatelessComponent<IComponentProps> = (props) => {
  const { children, tag: Tag, popoutId } = props
  return (
    <Tag className="mds-c-info-card" data-popout-target={popoutId}>
      {children}
    </Tag>
  )
}

MdsInfoCard.defaultProps = {
  tag: 'div'
}

export { MdsInfoCard, MdsInfoCardIcon, MdsInfoCardInfo, MdsInfoCardSubtitle, MdsInfoCardTitle }
