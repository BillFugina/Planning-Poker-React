import * as React from 'react'
import { ClassNameBuilder, IMdsSelectControlProps } from '../..'
interface IMdsControlSelectOption {
  displayText: string
  value: number
}

export interface IMdsControlSelectChangedEventArgs {
  id: string
  previousValue: IEntityUID
  currentValue: IEntityUID
}

interface IMdsControlSelectProps extends IMdsSelectControlProps {
  selectOptions: IMdsControlSelectOption[]
  selectedValue: number
  handleChange?(event: IMdsControlSelectChangedEventArgs): void
}

interface ISelectState {
  selectedValue: IEntityUID
}

class MdsControlSelect extends React.Component<Readonly<IMdsControlSelectProps>, ISelectState> {
  constructor(props) {
    super(props)
    this.state = { selectedValue: props.selectedValue }
  }

  render() {
    const { props } = this
    const { hasError, id, selectOptions, required, selectedValue } = props
    const handleChange: (event: React.ChangeEvent<HTMLSelectElement>) => void = event => {
      // Set state to persist the new value
      this.setState({ selectedValue: Number(event.target.value) })
      // Then notify the onChange event handler, which may re-render this component through props
      if (props.onChange) props.onChange(event)
      if (props.handleChange) props.handleChange({ id: props.id, currentValue: Number(event.target.value), previousValue: props.selectedValue})
    }

    return (
      <select
        {
          ...ClassNameBuilder(
            'mds-c-control',
            hasError ? 'mds-has-error' : undefined
          )
        }
        id={id}
        required={required}
        onChange={handleChange}
      >
        {selectOptions.map(function(option) {
          return (
          <option value={option.value} selected={option.value === selectedValue}>
            {option.displayText}
          </option>
          )
        })}
      </select>
    )
  }
}

export { MdsControlSelect }
