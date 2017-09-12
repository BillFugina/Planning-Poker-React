import * as React from 'react'
import * as uuid from 'uuid'
import { MdsContent } from '../mds-content'
import { Replace } from '@inmotionnow/utilities'
export interface IMdsContentEditableChangedEventArgs {
  previousValue: string
  currentValue: string
}

interface IComponentOwnProps {
  // this.props properties placed here must be passed in from a parent component
  label: string
  placeholder?: string
  required?: boolean
  value: string
  onChange(e: IMdsContentEditableChangedEventArgs): void
}

interface IComponentState {
  value: string
}

type IComponentProps = Readonly<IComponentOwnProps>

class MdsContentEditable extends React.Component<IComponentProps, IComponentState> {

  private node: HTMLDivElement

  constructor(props) {
    super(props)
    this.state = { value: props.value }
  }

  componentWillReceiveProps(nextProps: IComponentProps) {
    this.setState({ value: nextProps.value })
  }

  componentDidMount() {
    window.mds.editable.add(this.node)
  }

  componentWillUnmount() {
    window.mds.editable.remove(this.node)
  }

  render() {
    const { props, state } = this
    const { label, placeholder, required } = props
    const { value } = state

    const getDomNode = (node: HTMLDivElement) => {
      this.node = node
    }

    const handleBlur: React.FocusEventHandler<HTMLDivElement> = event => {
      const value = Replace.IfNullOrEmpty(this.node.innerHTML.trim(), null)
      this.setState({ value: required && value.length === 0 ? props.value : value })
      if (value !== props.value) {
        props.onChange({ currentValue: value, previousValue: props.value })
      }
    }

    const labelId = `${label.toLowerCase().split(' ').join('-')}-${uuid.v4()}`

    return (
      <MdsContent>
        <div className="mds-c-editable" data-wrapper="">
          <label className="mds-c-editable__label" htmlFor={labelId}>{label}: </label>
          <div
            {
              ...{
                'aria-labelledby': labelId,
                'aria-multiline': 'true',
                className: 'mds-c-editable__control',
                contentEditable: true,
                dangerouslySetInnerHTML: { __html: value },
                onBlur: handleBlur,
                placeholder: placeholder || '',
                ref: getDomNode,
                role: 'textbox',
                'data-input': ''
              }
            }
          />
        </div>
      </MdsContent>
    )

  }
}

export { MdsContentEditable }
