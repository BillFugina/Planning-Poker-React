import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsViewFooter: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <footer className="mds-l-view__footer">
      {children}
    </footer>
  )
}

export { MdsViewFooter }
