import * as React from 'react'
import * as uuid from 'uuid'
import { MdsTagListEditor, MdsTags, MdsTag, MdsTagNew, MdsIcon } from '.'

interface IComponentOwnProps extends IMdsTagListConfig {
  value: string[]
  removeTitle?: string,
  placeholder?: string
  onTagClick?: (tagValue: string) => any
  getInputNode?: (node: HTMLInputElement) => any,
  autoFocus?: boolean,
  maxLength?: number
}

type IComponentProps = Readonly<IComponentOwnProps>

class TagListEditor extends React.Component<IComponentProps> {
  private instance: IMdsTagListEditor
  private id: string = `taglist-${uuid.v4()}`

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { onBlur, onChange, value, maxLength, editOnBackspace, autoFocus, removeTitle } = this.props

    let config = {
      id: this.id,
      type: 'tag-typeahead',
      disableUiUpdate: true,
      onBlur,
      onChange,
      value,
      removeTitle,
      maxLength,
      editOnBackspace
    }

    this.instance = window.mds.typeahead(config)
    if (autoFocus) {
      this.instance.focus()
    }
  }

  componentWillUnmount() {
    this.instance.destroy()
  }

  handleRemoveClick = (tagValue: string) => (event: React.MouseEvent<Element>) => {
    event.preventDefault()
    this.instance.removeTag(tagValue)
  }

  handleTagClick = (tagValue: string) => (event: React.MouseEvent<Element>) => {
    this.props.onTagClick(tagValue)
  }

  render() {
    const { props } = this
    const { value, placeholder, getInputNode, removeTitle, maxLength } = props
    let isHighlighted = false

    if (this.instance) {
      isHighlighted = this.instance.editNext && this.instance.hasSelection
    }

    return (value
      ? (
        <MdsTagListEditor tagListId={this.id} placeholder={placeholder} getInputNode={getInputNode} value={value}>
          <MdsTags tagListId={this.id}>
            {
              value.map((valueString, idx) => {
                const isLastTag = idx + 1 === value.length
                return (
                  <MdsTag tagValue={valueString} title={valueString} onTagClick={this.handleTagClick(valueString)} isHighlighted={isHighlighted && isLastTag}>
                    <button type="button" onMouseDown={this.handleRemoveClick(valueString)} className="mds-c-tag__button" data-close={true} title={removeTitle}>
                      <span>{removeTitle}</span>
                      <MdsIcon name="close" />
                    </button>
                  </MdsTag>
                )
              })
            }
            <MdsTagNew {...{ placeholder, maxLength, getInputNode }}/>
          </MdsTags>
        </MdsTagListEditor>
      )
      : null

    )
  }
}

export { TagListEditor }
