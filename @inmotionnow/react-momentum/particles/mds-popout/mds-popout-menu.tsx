import * as React from 'react'
import { ClassNameBuilder } from '../..'
import { Portal } from '../..'

export type TMdsPopoutMenuSize = 'lg'

interface IComponentOwnProps {
  size?: TMdsPopoutMenuSize
  popoutId?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsPopoutMenu: React.StatelessComponent<IComponentProps> = props => {
  const { children, size, popoutId } = props
  return (
    <Portal>
      <div
        {
          ...{
            ...ClassNameBuilder(
              'mds-c-popout__menu',
              size ? `mds-c-popout__menu--size-${size}` : undefined
            ),
            'aria-hidden': true,
            'data-popout': popoutId
          }
        }
      >
        {children}
      </div>
    </Portal>
  )
}

MdsPopoutMenu.defaultProps = { }

export { MdsPopoutMenu }
