import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsPopoutMenuPanel: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-popout__menu-panel">
      {children}
    </div>
  )
}

MdsPopoutMenuPanel.defaultProps = { }

export { MdsPopoutMenuPanel }
