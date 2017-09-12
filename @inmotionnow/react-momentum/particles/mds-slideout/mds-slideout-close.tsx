import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlideoutClose: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-slideout__close">
      {children}
    </div>
  )
}

MdsSlideoutClose.defaultProps = { }

export { MdsSlideoutClose }
