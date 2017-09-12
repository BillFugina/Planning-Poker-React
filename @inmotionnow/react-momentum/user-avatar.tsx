import * as React from 'react'
import { MdsAvatar, TMdsAvatarSize, TMdsAvatarColor, TMdsAvatarStatus, IMdsAvatarTag } from '.'

export interface IUserAvatar {
  FirstName: string
  LastName: string
  ProfileIcon: string
  Email?: string
}

function getInitials(user: IUserAvatar): string {
  return `${user.FirstName ? user.FirstName.trim().substr(0, 1) : ''}${user.LastName ? user.LastName.trim().substr(0, 1) : ''}`
}

function getFirstName(user: IUserAvatar): string {
  return user && user.FirstName && user.FirstName.trim().length > 0 ? user.FirstName.trim() : undefined
}

function getLastName(user: IUserAvatar): string {
  return user && user.LastName && user.LastName.trim().length > 0 ? user.LastName.trim() : undefined
}

export function getFullName(user: IUserAvatar): string {
  const firstName = getFirstName(user)
  const lastName = getLastName(user)
  return firstName && lastName ? `${firstName} ${lastName}` : `${firstName || ''}${lastName || ''}`
}

interface IComponentOwnProps {
  tag?: IMdsAvatarTag
  user: IUserAvatar
  size?: TMdsAvatarSize
  color?: TMdsAvatarColor
  status?: TMdsAvatarStatus
}

type IComponentProps = Readonly<IComponentOwnProps>

const UserAvatar: React.StatelessComponent<IComponentProps> = props => {
  const { user, ...avatar } = props
  return user
    ? (
        <MdsAvatar {...{ ...avatar, title: getFullName(user), backgroundImage: user.ProfileIcon }} >
          {getInitials(user)}
        </MdsAvatar>
      )
    : (
        <MdsAvatar title="..." {...avatar}>
          ...
        </MdsAvatar>
      )
}

UserAvatar.defaultProps = { }

export { UserAvatar, IComponentOwnProps as IUserAvatarProps }
