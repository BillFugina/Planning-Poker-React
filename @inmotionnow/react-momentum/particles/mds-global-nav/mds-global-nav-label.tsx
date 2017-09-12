import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGlobalNavLabel: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <span className="mds-c-global-nav__label">
      {children}
    </span>
  )
}

export { MdsGlobalNavLabel }
