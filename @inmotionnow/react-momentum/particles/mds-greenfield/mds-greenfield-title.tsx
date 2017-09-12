import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGreenfieldTitle: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-greenfield__title">
      {children}
    </div>
  )
}

export { MdsGreenfieldTitle }
