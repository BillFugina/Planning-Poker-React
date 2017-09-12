import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGreenfield: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-greenfield">
      {children}
    </div>
  )
}

export * from './mds-greenfield-cta'
export * from './mds-greenfield-image'
export * from './mds-greenfield-title'
export { MdsGreenfield }
