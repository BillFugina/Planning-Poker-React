import * as React from 'react'
import { MdsMenu, MdsMenuItem, MdsIcon, MdsMenuAction, TMdsIconName } from '.'

export interface ISelectMenuOption {
  displayText: string
  value: number
  icon?: TMdsIconName
}

export interface ISelectMenuChangedEventArgs {
  previousValue: number
  currentValue: number
}

interface IComponentState {
  selectedValue: number
}

interface IComponentOwnProps {
  options: ISelectMenuOption[]
  selectedValue: number
  onChange(e: ISelectMenuChangedEventArgs): void
}

type IComponentProps = Readonly<IComponentOwnProps>

class SelectMenu extends React.Component<IComponentProps, IComponentState> {

  constructor(props) {
    super(props)
    this.state = { selectedValue: props.selectedValue }
  }

  render() {

    const { options, selectedValue, onChange } = this.props

    const handleClick = (option: ISelectMenuOption) => (event: React.MouseEvent<Element>) => {
      this.setState({ selectedValue: option.value })
      onChange({ currentValue: option.value, previousValue: selectedValue })
    }

    return (
      <MdsMenu hasSelectableItems={true}>
        {options.map(function(option) {
          return (
            <MdsMenuItem>
              <MdsMenuAction
                onClick={handleClick(option)}
                tag="button"
                selected={option.value === selectedValue}
              >
                <span>
                  {option.icon && <MdsIcon name={option.icon} />}
                  {option.icon && ' '}
                  {option.displayText}
                </span>
              </MdsMenuAction>
            </MdsMenuItem>
          )
        })}
      </MdsMenu>
    )

  }

}

export { SelectMenu }
