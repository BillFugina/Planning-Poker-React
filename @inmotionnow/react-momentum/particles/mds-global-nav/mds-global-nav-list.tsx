import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGlobalNavList: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <ul className="mds-c-global-nav__list">
      {children}
    </ul>
  )
}

export { MdsGlobalNavList }
