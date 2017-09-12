import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsModalTitle: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-modal__title">
      {children}
    </div>
  )
}

MdsModalTitle.defaultProps = { }

export { MdsModalTitle }
