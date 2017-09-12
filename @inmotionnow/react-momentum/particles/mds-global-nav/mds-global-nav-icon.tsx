import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGlobalNavIcon: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <span className="mds-c-global-nav__icon">
      {children}
    </span>
  )
}

export { MdsGlobalNavIcon }
