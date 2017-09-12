import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTabList: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <ul className="mds-c-tabs__list" role="tablist">
      {children}
    </ul>
  )
}

export { MdsTabList }
