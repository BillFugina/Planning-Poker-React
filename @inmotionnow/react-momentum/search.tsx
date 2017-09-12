import * as React from 'react'
import { MdsControlInput } from '.'

interface IComponentOwnProps {
  placeholder?: string
  value: string
  onChange(value: string): void
}

type IComponentProps = Readonly<IComponentOwnProps>

interface IComponentState { }

class Search extends React.Component<IComponentProps, IComponentState> {

  render() {
    const { placeholder, value, onChange } = this.props

    const handleChange = function(event) {
      onChange(event.currentValue)
    }

    return (
      <MdsControlInput
        id="search"
        type="search"
        block={true}
        required={false}
        handleChange={handleChange}
        placeholder={placeholder}
        value={value}
      />
    )
  }
}

export { Search }
