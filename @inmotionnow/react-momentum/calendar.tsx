import * as React from 'react'
import * as Flatpickr from 'flatpickr'
import { MdsControlInput, MdsForm, ControlGroup } from '.'

export type IDatePickerOptions = Flatpickr.Options
export type IDatePickerDate= Flatpickr.DateString

interface IComponentOwnProps {
  options?: Flatpickr.Options
  value?: string
  hideInput?: boolean
  enableTime?: boolean
  onChange?: Flatpickr.EventCallback
  label?: string
}

interface IComponentState {
  selectedValue: string
}

export interface ICalendarEventArgs {
  previousDate: string
  currentDate: string
}

const hooks = [
  'onChange',
  'onOpen',
  'onClose',
  'onMonthChange',
  'onYearChange',
  'onReady',
  'onValueUpdate',
  'onDayCreate',
  'enableTime'
]

type IComponentProps = Readonly<IComponentOwnProps>

class Calendar extends React.Component<IComponentProps, IComponentState> {
  private inputElement: HTMLInputElement
  private datepicker: Flatpickr

  constructor(props) {
    super(props)
    this.state = { selectedValue: props.value }
  }

  addHooks (options) {
    let optionsWithHooks = {...options}

    hooks.forEach((hook) => {
      if (this.props[hook]) {
        optionsWithHooks[hook] = this.props[hook]
      }
    })

    return optionsWithHooks
  }

  componentDidMount() {
    const options = {
      onClose: () => {
        this.inputElement.blur && this.inputElement.blur()
      },
      altInput: true,
      altFormat: 'F j, Y',
      ...this.props.options
    }

    const optionsWithHooks = this.addHooks(options)
    this.datepicker = window.mds.datepicker.add(this.inputElement, optionsWithHooks)
  }

  componentDidUnMount() {
    window.mds.datepicker.remove(this.datepicker)
  }

  componentWillReceiveProps(nextProps) {
    const { options } = nextProps
    const datepicker = this.datepicker

    if (nextProps.hasOwnProperty('value')) {
      datepicker.setDate(nextProps.value, false)
    }

    if (options) {
      const optionsWithHooks = this.addHooks(options)

      const optionsKeys = Object.keys(nextProps.options)

      optionsKeys.forEach(function(optionKey) {
        let value = optionsWithHooks[optionKey]

        if (hooks.indexOf(optionKey) >= 0 && !Array.isArray(value)) {
          value = [value]
        }

        datepicker.set(optionKey, value)
      })
    }

  }

  render() {
    const { hideInput, label } = this.props
    const hideClass = hideInput ? 'mds-h-display-none' : ''

    const getInputElement = (el: HTMLInputElement) => {
      this.inputElement = el
    }

    return (
      <MdsForm>
        <ControlGroup labelText={label}>
          <MdsControlInput id="1" type="text" required={false} value={this.state.selectedValue} inputRef={getInputElement} customClass={`${hideClass}`} />
        </ControlGroup>
      </MdsForm>
    )
  }
}

export { Calendar }
