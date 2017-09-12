import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlideoutPanel: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-l-slideout__panel" data-overlay-content="">
      {children}
    </div>
  )
}

MdsSlideoutPanel.defaultProps = { }

export { MdsSlideoutPanel }
