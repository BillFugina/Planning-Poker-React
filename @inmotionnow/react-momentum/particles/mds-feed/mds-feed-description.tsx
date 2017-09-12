import * as React from 'react'
import { IMdsComponentTag } from '../..'

export type IMdsFeedDescriptionTag = IMdsComponentTag<'p' | 'span'>

interface IComponentOwnProps {
  tag?: IMdsFeedDescriptionTag
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFeedDescription: React.StatelessComponent<IComponentProps> = props => {
  const { children, tag: Tag } = props
  return (
    <Tag className="mds-c-feed__description">
      {children}
    </Tag>
  )
}

MdsFeedDescription.defaultProps = {
  tag: 'p'
}

export { MdsFeedDescription }
