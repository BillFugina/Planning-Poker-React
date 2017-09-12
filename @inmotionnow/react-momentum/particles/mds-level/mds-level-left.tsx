import * as React from 'react'
interface IComponentOwnProps {
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLevelLeft: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className={'mds-l-level__left'}>
     {children}
   </div>
  )
}

export { MdsLevelLeft }
