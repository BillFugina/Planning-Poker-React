import * as React from 'react'
import { MdsAvatar, MdsAvatars, TMdsAvatarSize, TMdsAvatarColor, UserAvatar, IUserAvatar } from '.'

interface IComponentTranslationsProps {
  PlusMoreText(more): string
}

interface IComponentOwnProps {
  size?: TMdsAvatarSize
  color?: TMdsAvatarColor
  users: IUserAvatar[]
  show?: number
  translations: IComponentTranslationsProps
}

type IComponentProps = Readonly<IComponentOwnProps>

const UserAvatarGroup: React.StatelessComponent<IComponentProps> = props => {
  const { size, color, show, users, translations } = props
  let userShowCount = Math.min(users.length, Math.max(show, 0))
  let moreCount = users.length - userShowCount
  if (users.length > userShowCount) {
    userShowCount -= 1
    moreCount += 1
  }
  const visibleUsers = (users && show) ? users.slice(0, userShowCount) : []

  return (
    <MdsAvatars>
      {visibleUsers
        .map(function(avatar) {
          return (
            <UserAvatar tag="li" user={avatar} size={size} color={color} />
          )
        })}
      {moreCount > 0 && show && <MdsAvatar tag="li" title={translations.PlusMoreText(moreCount)} size={size} color={color}>+{moreCount}</MdsAvatar>}
    </MdsAvatars>
  )
}

UserAvatarGroup.defaultProps = {
  show: 4
}

export { UserAvatarGroup }
