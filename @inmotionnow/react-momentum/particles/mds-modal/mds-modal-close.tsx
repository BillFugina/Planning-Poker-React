import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsModalClose: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-modal__close">
      {children}
    </div>
  )
}

MdsModalClose.defaultProps = { }

export { MdsModalClose }
