import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsModalContent: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-modal__content" data-overlay-content="">
      {children}
    </div>
  )
}

MdsModalContent.defaultProps = { }

export { MdsModalContent }
