import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsModalFooter: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-modal__footer">
      {children}
    </div>
  )
}

MdsModalFooter.defaultProps = { }

export { MdsModalFooter }
