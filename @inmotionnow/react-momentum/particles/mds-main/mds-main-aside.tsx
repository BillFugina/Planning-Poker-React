import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMainAside: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <aside className="mds-l-main__aside">
      {children}
    </aside>
  )
}

export { MdsMainAside }
