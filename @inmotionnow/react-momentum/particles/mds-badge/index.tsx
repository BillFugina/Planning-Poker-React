import * as React from 'react'
import { ClassNameBuilder } from '../..'
import { MdsIcon, TMdsIconName } from '../mds-icon'

type TMdsBadgeTheme = 'info' | 'success' | 'warning' | 'danger' | 'purple'

interface IMdsBadgeComponentProps {
  name?: TMdsIconName
  text?: string
  theme?: TMdsBadgeTheme
}

type IComponentProps = Readonly<IMdsBadgeComponentProps>

const MdsBadge: React.StatelessComponent<IComponentProps> = props => {
  const { name, text, theme } = props
  return (
    <li
      {
        ...ClassNameBuilder(
          'mds-c-badge',
          theme ? `mds-c-badge--theme-${theme}` : undefined
        )
      }
    >
      <MdsIcon name={name} />
      <span className="mds-c-badge__text">{text}</span>
    </li>
  )
}

export { MdsBadge, IMdsBadgeComponentProps }
export * from './mds-badgelist'
