import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFeedName: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <span className="mds-c-feed__name">
      {children}
    </span>
  )
}

export { MdsFeedName }
