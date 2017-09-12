import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMenuItem: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <li className="mds-c-menu__item">
      {children}
    </li>
  )
}

MdsMenuItem.defaultProps = { }

export { MdsMenuItem }
