import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTab: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <li className="mds-c-tab" role="presentation">
      {children}
    </li>
  )
}

export { MdsTab }
