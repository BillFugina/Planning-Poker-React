import * as React from 'react'
import { MdsMenuLabel } from './mds-menu-label'

interface IComponentOwnProps {
  heading: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMenuSubmenu: React.StatelessComponent<IComponentProps> = props => {
  const { heading, children } = props
  return (
    <span>
      <MdsMenuLabel>{heading}</MdsMenuLabel>
      <ul className="mds-c-menu__submenu">
        {children}
      </ul>
    </span>
  )
}

MdsMenuSubmenu.defaultProps = { }

export { MdsMenuSubmenu }
