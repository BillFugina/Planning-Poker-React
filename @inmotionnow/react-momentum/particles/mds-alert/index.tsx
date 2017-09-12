import * as React from 'react'
import { ClassNameBuilder } from '../..'

type TMdsAlertTheme = 'info' | 'success' | 'warning' | 'danger'

interface IComponentOwnProps {
  theme?: TMdsAlertTheme // mds-c-alert--theme-*
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsAlert: React.StatelessComponent<IComponentProps> = props => {
  const { theme, children } = props
  return (
    <div
      {
        ...ClassNameBuilder(
          'mds-c-alert',
          theme ? `mds-c-alert--theme-${theme}` : undefined
        )
      }
      role="alert"
    >
      <div className="mds-c-alert__content">
        {children}
      </div>
    </div>
  )
}

export { MdsAlert }
