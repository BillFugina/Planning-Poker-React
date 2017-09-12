import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFeedAvatar: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-feed__avatar">
      {children}
    </div>
  )
}

export { MdsFeedAvatar }
