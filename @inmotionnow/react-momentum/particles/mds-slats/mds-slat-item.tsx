import * as React from 'react'
import { ClassNameBuilder } from '../..'

interface IComponentOwnProps {
  className?: string
  resize?: boolean
  stretch?: boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlatItem: React.StatelessComponent<IComponentProps> = props => {
  const { children, className, resize, stretch } = props

  return (
    <div
      {
        ...ClassNameBuilder(
          'mds-c-slat__item',
          className,
          resize ? `mds-c-slat__item--resize` : undefined,
          stretch ? `mds-c-slat__item--stretch` : undefined
        )
      }
    >
      {children}
    </div>
  )
}

MdsSlatItem.defaultProps = { }

export { MdsSlatItem }
