import * as React from 'react'
import { IMdsComponentTag, ClassNameBuilder } from '../..'

type TMdsHeadingSize = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'med' | 'sm' | 'xs'
type IMdsHeadingTag = IMdsComponentTag<'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'span'>

interface IComponentOwnProps {
  tag?: IMdsHeadingTag
  size?: TMdsHeadingSize
  secondaryText?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsHeading: React.StatelessComponent<IComponentProps> = props => {
  const { tag: Tag, size, secondaryText, children } = props
  return (
    <Tag
      {
        ...ClassNameBuilder(
          'mds-c-heading',
          'mds-c-heading--block',
          size ? `mds-c-heading--size-${size}` : undefined
        )
      }
    >
      {children} {secondaryText && <small>{secondaryText}</small>}
    </Tag>
  )
}

MdsHeading.defaultProps = {
  tag: 'h1',
  size: 'xxxl'
}

export { MdsHeading }
