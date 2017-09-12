import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMediaCardTitle: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className="mds-c-media-card__title">
     {children}
   </div>
  )
}

MdsMediaCardTitle.defaultProps = { }

export { MdsMediaCardTitle }
