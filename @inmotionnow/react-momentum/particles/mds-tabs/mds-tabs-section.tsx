import * as React from 'react'
import { ClassNameBuilder } from '../..'

interface IComponentOwnProps {
  name: string
  isActive: boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTabsSection: React.StatelessComponent<IComponentProps> = props => {
  const { name, children, isActive } = props
  return (
    <section
      {
        ...ClassNameBuilder(
        'mds-c-tabs__section',
        !isActive ? 'mds-is-hidden' : undefined
        )
      }
      id={name}
      role="tabpanel"
      aria-hidden={!isActive}
    >
      {children}
    </section>
  )
}

export { MdsTabsSection }
