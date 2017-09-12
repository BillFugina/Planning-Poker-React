import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsNavigationSubmenu: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-l-navigation__submenu">
      {children}
    </div>
  )
}

export { MdsNavigationSubmenu }
