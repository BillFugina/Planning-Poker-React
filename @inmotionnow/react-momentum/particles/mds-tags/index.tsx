import * as React from 'react'
import { MdsTag } from './mds-tag'

interface IComponentOwnProps {
  tagListId?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTags: React.StatelessComponent<IComponentProps> = props => {
  const { children, tagListId } = props
  return (
    <ul className="mds-c-tags" data-tags={tagListId}>
      {children}
    </ul>
  )
}

export { MdsTags, MdsTag }
