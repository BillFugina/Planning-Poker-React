import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsModalBody: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-modal__body">
      {children}
    </div>
  )
}

MdsModalBody.defaultProps = { }

export { MdsModalBody }
