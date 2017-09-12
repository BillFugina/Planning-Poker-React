import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsInfoCardInfo: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-info-card__info">
      {children}
    </div>
  )
}

MdsInfoCardInfo.defaultProps = {}

export { MdsInfoCardInfo }
