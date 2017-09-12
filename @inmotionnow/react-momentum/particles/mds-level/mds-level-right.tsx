import * as React from 'react'
interface IComponentOwnProps {
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLevelRight: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className={'mds-l-level__right'}>
     {children}
   </div>
  )
}

export { MdsLevelRight }
