import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsModalHeader: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-modal__header">
      {children}
    </div>
  )
}

MdsModalHeader.defaultProps = { }

export { MdsModalHeader }
