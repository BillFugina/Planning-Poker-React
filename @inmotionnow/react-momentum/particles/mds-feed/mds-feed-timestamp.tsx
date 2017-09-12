import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFeedTimestamp: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <span className="mds-c-feed__timestamp">
      {children}
    </span>
  )
}

export { MdsFeedTimestamp }
