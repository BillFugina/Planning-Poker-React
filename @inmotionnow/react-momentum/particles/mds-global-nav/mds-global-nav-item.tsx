import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

export const MdsGlobalNavItem: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <li className="mds-c-global-nav__item">
      {children}
    </li>
  )
}
