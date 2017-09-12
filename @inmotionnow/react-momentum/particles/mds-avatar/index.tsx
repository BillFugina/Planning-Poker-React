import * as React from 'react'
import { ClassNameBuilder, IMdsComponentTag } from '../..'
import { MdsAvatars } from './mds-avatars'

type TMdsAvatarAction = 'add'
export type TMdsAvatarStatus = 'info' | 'success' | 'warning' | 'danger' | 'owner'
export type TMdsAvatarSize = 'sm' | 'med' | 'lg'
export type TMdsAvatarColor = 'blue' | 'green' | 'orange' | 'purple' | 'bluegray' | 'red' | 'yellow' | 'gray'
export type IMdsAvatarTag = IMdsComponentTag<'div' | 'li' | 'button'>

interface IComponentOwnProps {
  tag?: IMdsAvatarTag
  action?: TMdsAvatarAction
  size?: TMdsAvatarSize
  color?: TMdsAvatarColor
  status?: TMdsAvatarStatus
  backgroundImage?: string
  title?: string
  hidden?: boolean
  popoutId?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsAvatar: React.StatelessComponent<IComponentProps> = props => {
  const { action, size, color, status, backgroundImage, title, tag: Tag, children, hidden, popoutId } = props

  return (
    <Tag
      {
        ...ClassNameBuilder(
          'mds-c-avatar',
          action ? `mds-c-avatar--${action}` : undefined,
          size ? `mds-c-avatar--size-${size}` : undefined,
          color ? `mds-c-avatar--color-${color}` : undefined,
          status ? `mds-c-avatar--status-${status}` : undefined,
          hidden ? 'mds-h-visibility-hidden' : undefined
        )
      }
      data-popout-target={popoutId}
      style={{ backgroundImage: backgroundImage ? `url('${backgroundImage}')` : undefined}}
      title={title || ''}
    >
      {children}
    </Tag>
  )
}

MdsAvatar.defaultProps = {
  tag: 'div'
}

export { MdsAvatar, MdsAvatars }
