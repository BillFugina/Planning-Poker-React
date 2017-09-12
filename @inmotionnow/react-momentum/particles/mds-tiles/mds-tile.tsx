import * as React from 'react'
import { ClassNameBuilder } from '../..'

type TMdsTileSize = 'sm' | 'med' | 'lg'
interface IComponentOwnProps {
  size?: TMdsTileSize
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTile: React.StatelessComponent<IComponentProps> = props => {
  const { children, size } = props
  return (
    <li
      {
        ...ClassNameBuilder(
          'mds-c-tile',
          size ? `mds-c-tile--size-${size}` : undefined
        )
      }
    >
      {children}
    </li>
  )
}

export { MdsTile }
