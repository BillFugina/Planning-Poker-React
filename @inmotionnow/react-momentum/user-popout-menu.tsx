import * as React from 'react'
import { MdsPopout, UserInfoCard, IUserAvatar } from '.'

interface IComponentOwnProps {
  user: IUserAvatar
  popoutId?: string
  popoutContent: React.ReactElement<any>
}

type IComponentProps = Readonly<IComponentOwnProps>

const UserPopout: React.StatelessComponent<IComponentProps> = props => {
  const { user, popoutId, popoutContent } = props

  return (

    <UserInfoCard {...{user}} tag={'button'} popoutId={popoutId}>
      <MdsPopout
        align="left"
        position="top"
        popoutId={popoutId}
      >
        {popoutContent}
      </MdsPopout>
    </UserInfoCard>
  )
}

UserPopout.defaultProps = { }

export { UserPopout }
