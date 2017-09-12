import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGreenfieldCta: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-greenfield__cta">
      {children}
    </div>
  )
}

export { MdsGreenfieldCta }
