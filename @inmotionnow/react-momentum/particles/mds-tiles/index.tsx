import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTiles: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <ul className="mds-c-tiles">
      {children}
    </ul>
  )
}

export { MdsTile } from './mds-tile'
export { MdsTiles }
