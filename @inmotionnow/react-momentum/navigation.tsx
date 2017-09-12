import * as React from 'react'
import { MdsNavigation } from '.'

interface IComponentOwnProps {
  menu: React.ReactNode
  submenu?: React.ReactNode
  expanded: boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

const Navigation: React.StatelessComponent<IComponentProps> = props => {
  const { menu, submenu, expanded } = props
  return (
    <MdsNavigation expanded={expanded}>
      {menu}
      {submenu}
    </MdsNavigation>
  )
}

export { Navigation }
