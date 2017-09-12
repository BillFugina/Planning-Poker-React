import * as React from 'react'
import { MdsButton, TMdsButtonType } from './mds-button'
import { ClassNameBuilder } from '../..'

export type TMdsButtonsInset = 'sm' | 'med' | 'lg'

interface IComponentOwnProps {
  inset?: TMdsButtonsInset
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsButtons: React.StatelessComponent<IComponentProps> = props => {
  const { children, inset } = props
  return (
    <div
      {
      ...ClassNameBuilder(
        'mds-c-buttons',
        inset
          ? `mds-c-buttons--inset-${inset}`
          : null
      )
      }
    >
      {children}
    </div>
  )
}

export { MdsButtons, MdsButton, TMdsButtonType }
