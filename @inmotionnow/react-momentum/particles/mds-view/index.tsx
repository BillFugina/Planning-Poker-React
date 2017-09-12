import * as React from 'react'
import { MdsViewHeader } from './mds-view-header'
import { MdsViewFooter } from './mds-view-footer'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsView: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-l-view">
      {children}
    </div>
  )
}

export { MdsView, MdsViewHeader, MdsViewFooter }
