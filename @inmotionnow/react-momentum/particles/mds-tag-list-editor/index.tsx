import * as React from 'react'
import { MdsTagNew } from './mds-tag-new'

interface IComponentOwnProps extends IMdsTagListConfig {
  tagListId: string
  placeholder?: string
  getInputNode?: (node: HTMLInputElement) => any
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTagListEditor: React.StatelessComponent<IComponentProps> = props => {
  const { children, tagListId } = props
  return (
    <div
      className="mds-c-tag-typeahead"
      data-typeahead={tagListId}
      data-wrapper=""
    >
      {children}
    </div>
  )

}

MdsTagListEditor.defaultProps = {
  placeholder: ''
}

export { MdsTagListEditor, MdsTagNew }
