import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsControlGroupHelpText: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <span className="mds-c-control-group__help-text">
      {children}
    </span>
  )
}

MdsControlGroupHelpText.defaultProps = { }

export { MdsControlGroupHelpText }
