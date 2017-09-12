import * as React from 'react'
import { ClassNameBuilder } from '../..'

type TMdsContainerSize = 'lg' | 'med' | 'sm'

interface IComponentOwnProps {
  size?: TMdsContainerSize
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsContainer: React.StatelessComponent<IComponentProps> = props => {
  const { children, size } = props
  return (
    <div
      {
        ...ClassNameBuilder(
          'mds-l-container',
          size ? `mds-l-container--size-${size}` : undefined
        )
      }
    >
      {children}
    </div>
  )
}

MdsContainer.defaultProps = {
  size: 'med'
}

export { MdsContainer }
