import * as React from 'react'
import { ClassNameBuilder } from '../..'

interface IComponentOwnProps {
  name: string,
  onClick: React.MouseEventHandler<Element>
  isSelected: boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTabLink: React.StatelessComponent<IComponentProps> = props => {
  const { name, children, onClick, isSelected } = props
  return (
    <a
      href={'#' + name}
      {...ClassNameBuilder(
        'mds-c-tab__link',
        isSelected ? 'mds-is-active' : undefined
        )
      }
      role="tab"
      tabIndex={isSelected ? 0 : -1}
      aria-controls={name}
      aria-selected={isSelected}
      onClick={onClick}
    >
      {children}
    </a>
  )
}

export { MdsTabLink }
