import * as React from 'react'
import { MdsNavigationMenu } from '.'

interface IComponentOwnProps {
  top: React.ReactNode
  bottom?: React.ReactNode
}

type IComponentProps = Readonly<IComponentOwnProps>

const NavigationMenu: React.StatelessComponent<IComponentProps> = props => {
  const { top, bottom } = props
  return (
    <MdsNavigationMenu>
      {top}
      {bottom}
    </MdsNavigationMenu>
  )
}

export { NavigationMenu }
