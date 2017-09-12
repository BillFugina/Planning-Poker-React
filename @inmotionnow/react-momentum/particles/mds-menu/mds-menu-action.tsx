import * as React from 'react'
import { IMdsComponentTag, ClassNameBuilder } from '../..'
import { Link } from 'react-router-dom'

type IMdsMenuActionTag = IMdsComponentTag<'a' | 'link' | 'button'>

interface IComponentOwnProps {
  tag: IMdsMenuActionTag
  active?: boolean
  selected?: boolean
  link?: string
  onClick?: React.MouseEventHandler<Element>
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMenuAction: React.StatelessComponent<IComponentProps> = props => {
  const { tag, link, children, active, selected, onClick } = props
  const classNames = {
    ...ClassNameBuilder(
      'mds-c-menu__action',
      active ? 'mds-is-active' : undefined,
      selected ? 'mds-is-selected' : undefined)
  }

  return (
    {
      'link': (
        <Link to={link} {...classNames}>
          {children}
        </Link>
      ),
      'button': (
        <button {...classNames} onClick={onClick}>
          {children}
        </button>
      )
    }[tag]
  )
}

MdsMenuAction.defaultProps = { }

export { MdsMenuAction }
