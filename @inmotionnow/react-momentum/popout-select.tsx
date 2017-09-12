import * as React from 'react'
import { SelectMenu, ISelectMenuOption, ISelectMenuChangedEventArgs, TMdsPopoutMenuSize, TMdsPopoutPosition, TMdsPopoutAlign, MdsPopout, MdsPopoutMenuPanel } from '.'

interface IComponentState {
  selectedValue: number
}

interface IComponentOwnProps {
  position: TMdsPopoutPosition
  align: TMdsPopoutAlign
  size: TMdsPopoutMenuSize
  options: ISelectMenuOption[]
  selectedValue: number
  heading?: React.ReactElement<any>
  popoutId: string
  onChange(e: ISelectMenuChangedEventArgs): void
}

type IComponentProps = Readonly<IComponentOwnProps>

class PopoutSelect extends React.Component<IComponentProps, IComponentState> {

  constructor(props) {
    super(props)
    this.state = { selectedValue: props.selectedValue }
  }

  render() {

    const { heading, position, align, size, options, selectedValue, onChange, popoutId } = this.props

    const handleSelectMenuOnChange: (e: ISelectMenuChangedEventArgs) => void = (e) => {
      onChange(e)
      window.mds.popout(popoutId).close()
    }

    return (
      <MdsPopout {...{ position, align, heading, size, popoutId }}>
        <MdsPopoutMenuPanel>
          <SelectMenu
            {
              ...{
                options,
                selectedValue,
                onChange: handleSelectMenuOnChange
              }
            }
          />
        </MdsPopoutMenuPanel>
      </MdsPopout>
    )
  }
}

export { PopoutSelect }
