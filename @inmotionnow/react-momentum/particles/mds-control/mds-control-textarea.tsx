import * as React from 'react'
import { ClassNameBuilder } from '../..'
import { IMdsTextareaControlProps } from '.'

interface IComponentOwnProps extends IMdsTextareaControlProps { }

interface IComponentState {
  value: string
}

type IComponentProps = Readonly<IComponentOwnProps>

class MdsControlTextarea extends React.Component<IComponentProps, IComponentState> {
  private textarea: HTMLTextAreaElement = undefined

  constructor(props) {
    super(props)
    this.state = { value: props.value }
  }

  componentDidMount() {
    window.mds.textarea.add()
  }

  componentWillUpdate() {
    window.mds.textarea.refresh()
  }

  componentWillUnmount() {
    window.mds.textarea.destroy()
  }

  render() {
    const { props, state } = this
    const { hasError, id, required, value: omit, block, placeholder, rows, form, inputRef, ...otherProps } = props
    const { value } = state

    const ref = inputRef ? (element) => {
      this.textarea = element
      inputRef(element)
    } : undefined
    const onChange: (event: React.ChangeEvent<HTMLTextAreaElement>) => void = event => {
      this.setState({ value: event.target.value })
      if (props.onChange) props.onChange(event)
      if (props.handleChange) props.handleChange({id: props.id, currentValue: event.target.value, previousValue: props.value} )
    }

    // For forces the cursor to be at the end on focus
    const onFocusHandler: (event: React.FocusEvent<HTMLTextAreaElement>) => void = event => {
      if (this.textarea) {
        this.textarea.setSelectionRange(event.currentTarget.value.length, event.currentTarget.value.length)
      }
    }

    return (
      <textarea
        {
        ...ClassNameBuilder(
          'mds-c-control',
          'mds-js-textarea',
          hasError ? 'mds-has-error' : undefined,
          block ? ' mds-c-control--block' : undefined
        )
        }
        {...{ id, ref, rows, required, value, placeholder, onChange, onFocus: onFocusHandler }}
        {...otherProps}
      />)
  }
}

export { MdsControlTextarea }
