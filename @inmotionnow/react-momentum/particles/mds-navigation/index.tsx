import * as React from 'react'
import { ClassNameBuilder } from '../..'
import { MdsNavigationMenu } from './mds-navigation-menu'
import { MdsNavigationSubmenu } from './mds-navigation-submenu'

interface IComponentOwnProps {
  expanded: boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsNavigation: React.StatelessComponent<IComponentProps> = props => {
  const { expanded, children } = props
  return (
    <nav
      {
      ...ClassNameBuilder(
        'mds-l-navigation',
        expanded ? 'mds-has-submenu mds-is-expanded' : undefined)
      }
    >
      {children}
    </nav>
  )
}

export { MdsNavigation, MdsNavigationMenu, MdsNavigationSubmenu }
