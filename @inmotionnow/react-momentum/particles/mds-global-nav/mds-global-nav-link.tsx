import * as React from 'react'
import { Link } from 'react-router-dom'
import { ClassNameBuilder } from '../..'

interface IComponentOwnProps {
  isActive: boolean
  hasSubmenu: boolean
  to: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGlobalNavLink: React.StatelessComponent<IComponentProps> = props => {
  const { to, children, isActive, hasSubmenu } = props
  return (
    <Link
      {
        ...ClassNameBuilder (
          'mds-c-global-nav__link',
          isActive ? 'mds-is-active' : undefined,
          hasSubmenu ? 'mds-has-submenu' : undefined
          )
      }
      to={to}
    >
      {children}
    </Link>
  )
}

export { MdsGlobalNavLink }
