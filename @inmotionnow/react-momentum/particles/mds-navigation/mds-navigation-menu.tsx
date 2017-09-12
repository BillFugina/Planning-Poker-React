import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsNavigationMenu: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-l-navigation__menu">
      {children}
    </div>
  )
}

export { MdsNavigationMenu }
