import * as React from 'react'
import { Link } from 'react-router-dom'
import { ClassNameBuilder } from '../..'

interface IComponentOwnProps {
  bold?: boolean
  completed?: boolean
  link?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlatTitle: React.StatelessComponent<IComponentProps> = props => {
  const { children, bold, completed, link } = props
  const handleClick = (e: React.MouseEvent<Element>) => { e.stopPropagation() }

  const className = ClassNameBuilder(
    'mds-c-slat__title',
    bold ? `mds-c-slat__title--bold` : undefined,
    completed ? `mds-is-complete` : undefined
  )

  return (
    link
      ? (
        <Link {...{...className, to: link, onClick: handleClick}}>
          {children}
        </Link>
        )
    : (
        <div {...{...className, to: link, onClick: handleClick}}>
          {children}
        </div>
        )
  )
}

MdsSlatTitle.defaultProps = { }

export { MdsSlatTitle }
