import * as React from 'react'
import { IMdsCheckRadioProps, MdsCheckRadio } from './mds-checkradio'

interface IMdsCheckboxChangedEventArgs {
  event: React.MouseEvent<HTMLLabelElement> | React.KeyboardEvent<HTMLInputElement>
  previousValue: boolean
  currentValue: boolean
}

interface IMdsCheckboxProps extends IMdsCheckRadioProps {
  checked: boolean
  onChange?(e: IMdsCheckboxChangedEventArgs): void
}

interface IMdsCheckboxState {
  checked: boolean
}

class MdsCheckbox extends React.Component<IMdsCheckboxProps, IMdsCheckboxState> {

  constructor(props) {
    super(props)
    this.state = { checked: props.checked }
  }

  componentWillReceiveProps(nextProps: IMdsCheckboxProps) {
    this.setState({ checked: nextProps.checked })
  }

  toggleState(event: React.MouseEvent<HTMLLabelElement> | React.KeyboardEvent<HTMLInputElement>) {
    this.setState(
      state => { return { checked: !state.checked } },
      () => this.props.onChange && this.props.onChange({ event, currentValue: this.state.checked, previousValue: !this.state.checked })
    )
  }

  render() {
    const { checked, onChange, ...checkRadioProps } = this.props

    const handleClick: (event: React.MouseEvent<HTMLLabelElement>) => void = event => {
      event.preventDefault()
      event.stopPropagation()
      this.toggleState(event)
    }

    const handleKeyDown: (event: React.KeyboardEvent<HTMLInputElement>) => void = event => {
      if (event.key === ' ') {
        event.preventDefault()
        event.stopPropagation()
        this.toggleState(event)
      }
    }

    return (
      <MdsCheckRadio
        {
          ...{
            ...checkRadioProps,
            onClick: handleClick
          }
        }
      >
        <input
          {
            ...{
              type: 'checkbox',
              checked: this.state.checked,
              onKeyDown: handleKeyDown
            }
          }
        />
      </MdsCheckRadio>
    )
  }
}

export { MdsCheckbox, IMdsCheckboxChangedEventArgs }
