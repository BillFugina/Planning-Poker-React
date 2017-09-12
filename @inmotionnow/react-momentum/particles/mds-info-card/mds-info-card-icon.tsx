import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsInfoCardIcon: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-info-card__icon">
      {children}
    </div>
  )
}

MdsInfoCardIcon.defaultProps = { }

export { MdsInfoCardIcon }
