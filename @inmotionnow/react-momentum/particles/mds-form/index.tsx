import * as React from 'react'
import { MdsFormGrid } from './mds-form-grid'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsForm: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-form">
      {children}
    </div>
  )
}

MdsForm.defaultProps = { }

export { MdsForm, MdsFormGrid }
