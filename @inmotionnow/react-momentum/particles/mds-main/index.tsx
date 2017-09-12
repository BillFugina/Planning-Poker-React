import * as React from 'react'
import { MdsMainAside } from './mds-main-aside'
import { MdsMainColumn } from './mds-main-column'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMain: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <main className="mds-l-main">
      {children}
    </main>
  )
}

export { MdsMain, MdsMainAside, MdsMainColumn }
