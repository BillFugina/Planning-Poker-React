import * as React from 'react'
import { InfoCard, IMdsInfoCardTag, MdsInfoCardIcon, MdsInfoCardTitle, MdsInfoCardSubtitle, IUserAvatarProps,
  UserAvatar, getFullName } from '.'

interface IComponentOwnProps {
  tag?: IMdsInfoCardTag
  popoutId?: string
}

type IComponentProps = Readonly<IComponentOwnProps> & IUserAvatarProps

const UserInfoCard: React.StatelessComponent<IComponentProps> = props => {
  const { user, tag, popoutId, children, ...userAvatarProps } = props

  return (
      <InfoCard
        tag={tag}
        popoutId={popoutId}
        icon={(
          <MdsInfoCardIcon>
            <UserAvatar {...userAvatarProps} user={user}/>
          </MdsInfoCardIcon>
        )}
        title={<MdsInfoCardTitle textOverflow="ellipsis">{getFullName(user)}</MdsInfoCardTitle>}
        subtitle={<MdsInfoCardSubtitle textOverflow="ellipsis">{user.Email}</MdsInfoCardSubtitle>}
      >
        {children}
      </InfoCard>
  )
}

UserInfoCard.defaultProps = {
  tag: 'div'
}

export { UserInfoCard }
