import * as React from 'react'

import { ClassNameBuilder } from '../..'

interface IComponentOwnProps {
  hasStatus?: boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFeedItem: React.StatelessComponent<IComponentProps> = props => {
  const { children, hasStatus } = props
  return (
    <li
      {
        ...ClassNameBuilder(
          'mds-c-feed__item',
          hasStatus ? 'mds-c-feed__item--has-status' : undefined
        )
      }
    >
      {children}
    </li>
  )
}

export { MdsFeedItem }
