import * as React from 'react'
import { ClassNameBuilder } from '../..'
import { MdsMenuAction } from './mds-menu-action'
import { MdsMenuItem } from './mds-menu-item'
import { MdsMenuSubmenu } from './mds-menu-submenu'

interface IComponentOwnProps {
  hasSelectableItems?: boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMenu: React.StatelessComponent<IComponentProps> = props => {
  const { children, hasSelectableItems } = props
  return (
    <ul
      {
        ...ClassNameBuilder(
          'mds-c-menu',
          hasSelectableItems ? `mds-has-selectable-items` : undefined
        )
      }
    >
      {children}
    </ul>
  )
}

MdsMenu.defaultProps = {
  hasSelectableItems: false
}

export { MdsMenu, MdsMenuAction, MdsMenuItem, MdsMenuSubmenu }
