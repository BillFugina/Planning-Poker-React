import * as React from 'react'
import * as uuid from 'uuid'
import { ClassNameBuilder } from '../..'
import { IMdsTextareaControlProps } from '../mds-control'

export interface IMdsInlineEditableChangedEventArgs {
  previousValue: string
  currentValue: string
}

interface IComponentOwnProps extends IMdsTextareaControlProps {
  // this.props properties placed here must be passed in from a parent component
  autosize?: boolean
  canWrap?: boolean
  disabled?: boolean
  focused?: boolean
  isNew?: boolean
  label: string
  placeholder?: string
  value: string
  onEnter?(e: IMdsInlineEditableChangedEventArgs): void
  onUpdate?(event: IMdsInlineEditableChangedEventArgs): void
}

interface IComponentState {
  value: string
}

type IComponentProps = Readonly<IComponentOwnProps>

class MdsInlineEditable extends React.Component<IComponentProps, IComponentState> {

  private node: HTMLInputElement | HTMLTextAreaElement

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

  componentDidUpdate() {
    if (this.props.focused) {
      this.node.focus()
    }
  }

  render() {
    const { props, state } = this
    const { required, autosize, canWrap, disabled, hasError, label, isNew, onUpdate, onEnter, placeholder } = props
    const { value } = state

    const getDomNode = (node: HTMLInputElement | HTMLTextAreaElement) => {
      this.node = node
    }

    const handleChange: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
      this.setState({ value: event.target.value })
    }

    const tryBroadcastEvent = (broadcastEvent: (event: IMdsInlineEditableChangedEventArgs) => void) => {
      const { state, props } = this

      if (required && !state.value) {
        // Update state with original value
        this.setState({ value: props.value })
      } else if (state.value !== props.value && broadcastEvent) {
        broadcastEvent({ currentValue: value, previousValue: props.value })
      }
    }

    const handleBlur: React.FocusEventHandler<HTMLInputElement | HTMLTextAreaElement> = event => {
      tryBroadcastEvent(onUpdate)
    }

    const handleKeyDown: React.KeyboardEventHandler<HTMLElement> = (e: React.KeyboardEvent<HTMLElement>) => {
      if (e.key === 'Enter') {
        tryBroadcastEvent(onEnter)
      }
    }

    const className = ClassNameBuilder(
      'mds-c-editable',
      autosize ? 'mds-c-editable--autowidth' : undefined,
      hasError ? 'mds-has-error' : undefined,
      isNew ? 'mds-c-editable--new' : undefined
    )

    const labelId = `${label.toLowerCase().split(' ').join('-')}-${uuid.v4()}`

    return canWrap
      ? (
          <div {...{...className}} data-wrapper="">
            <label className="mds-c-editable__label" htmlFor={labelId}>{label}: </label>
            <textarea
              className="mds-c-editable__control"
              {
                ...{
                  disabled,
                  id: labelId,
                  onBlur: handleBlur,
                  onChange: handleChange,
                  onKeyDown: handleKeyDown,
                  placeholder,
                  ref: getDomNode,
                  rows: 1,
                  value,
                  'data-input': ''
                }
              }
            />
          </div>
        )
      : (
          <div {...{...className}} data-wrapper="">
            <label className="mds-c-editable__label" htmlFor={label}>{label}: </label>
            <input
              className="mds-c-editable__control"
              {
                ...{
                  disabled,
                  id: label,
                  onChange: handleChange,
                  onKeyDown: handleKeyDown,
                  onBlur: handleBlur,
                  placeholder,
                  ref: getDomNode,
                  value,
                  'data-input': ''
                }
              }
            />
          </div>
        )
  }
}

export { MdsInlineEditable }
