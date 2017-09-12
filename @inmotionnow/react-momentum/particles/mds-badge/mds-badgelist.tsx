import * as React from 'react'
import { IMdsBadgeComponentProps, MdsBadge } from '../mds-badge'

interface IMdsBadgeListComponentProps {
  badges?: IMdsBadgeComponentProps[]
}

type IComponentProps = Readonly<IMdsBadgeListComponentProps>

const MdsBadgeList: React.StatelessComponent<IComponentProps> = props => {
  const { badges } = props
  return (
    <ul className="mds-c-badges">
      {badges.map(badge =>
        <MdsBadge name={badge.name} text={badge.text} theme={badge.theme} />
      )}
    </ul>
  )
}

export { MdsBadgeList, IMdsBadgeListComponentProps }
