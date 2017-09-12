import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLevel: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className="mds-l-level">
     {children}
   </div>
  )
}

MdsLevel.defaultProps = { }

export { MdsLevel }
