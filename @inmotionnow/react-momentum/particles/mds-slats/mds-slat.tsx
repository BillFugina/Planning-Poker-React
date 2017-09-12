import * as React from 'react'
import { ClassNameBuilder } from '../..'

interface IComponentOwnProps {
  onClick?: React.MouseEventHandler<HTMLDivElement>
  loading?: boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlat: React.StatelessComponent<IComponentProps> = props => {
  const { children, onClick, loading } = props
  return (
    <li>
      <div
        {
          ...ClassNameBuilder(
            'mds-c-slat',
            onClick ? `mds-c-slat--hover` : undefined,
            loading ? 'mds-is-loading' : undefined
          )
        }
        onClick={onClick}
      >
        {children}
      </div>
    </li>
  )
}

MdsSlat.defaultProps = { }

export { MdsSlat }
