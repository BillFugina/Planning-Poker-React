import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsViewHeader: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <header className="mds-l-view__header">
      {children}
    </header>
  )
}

export { MdsViewHeader }
