import * as React from 'react'

import { MdsApplicationWrapper } from './mds-application-wrapper'

interface IComponentOwnProps {
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsApplication: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-l-application">
      {children}
    </div>
  )
}

export { MdsApplication, MdsApplicationWrapper }
