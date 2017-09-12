import * as React from 'react'

import { MdsControlGroupHelpText } from './mds-control-group-help-text'
import { MdsControlGroupLabel } from './mds-control-group-label'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsControlGroup: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-control-group">
      {children}
    </div>
  )
}

MdsControlGroup.defaultProps = { }

export { MdsControlGroup, MdsControlGroupHelpText, MdsControlGroupLabel }
