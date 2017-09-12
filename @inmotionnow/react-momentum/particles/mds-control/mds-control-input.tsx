import * as React from 'react'
import { ClassNameBuilder, IMdsInputControlProps } from '../..'

export type TMdsControlInputType = 'text' | 'hidden' | 'search'

interface IComponentOwnProps extends IMdsInputControlProps { }

interface IComponentState {
  value: string
}

type IComponentProps = Readonly<IComponentOwnProps>

class MdsControlInput extends React.Component<IComponentProps, IComponentState> {
  private input: HTMLInputElement = undefined

  constructor(props) {
    super(props)
    this.state = { value: props.value }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({value: nextProps.value})
  }

  render() {
    const { props, state } = this
    const { hasError, id, type, required, value: omit, inputRef, block, placeholder, form, formNoValidate, list, ...otherProps } = props
    const { value } = state

    const onChange: (event) => void = event => {
      // Set state to persist the new value
      this.setState({ value: event.target.value })
      // Then notify the onChange event handler, which may re-render this component through props
      if (props.onChange) props.onChange(event)
      if (props.handleChange) props.handleChange({ id: props.id, currentValue: event.target.value, previousValue: props.value})
    }

    // Pass an inputRef function from parent to get child DOM node ref
    const getRef = (el: HTMLInputElement) => {
      this.input = el
      if (inputRef) inputRef(el)
    }

    // For forces the cursor to be at the end on focus
    const onFocusHandler: (event: React.FocusEvent<HTMLInputElement>) => void = event => {
      if (this.input) {
        this.input.setSelectionRange(event.currentTarget.value.length, event.currentTarget.value.length)
      }
    }

    return (
    <input
      {
        ...ClassNameBuilder(
          'mds-c-control',
          hasError ? 'mds-has-error' : undefined,
          block ? ' mds-c-control--block' : undefined
        )
      }
      {...{ref: getRef, id, type, required, value, onChange, onFocus: onFocusHandler, placeholder}}
      {...otherProps}
    />
    )
  }
}

export { MdsControlInput }
