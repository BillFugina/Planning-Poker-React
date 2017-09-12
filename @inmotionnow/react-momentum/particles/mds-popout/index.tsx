import * as React from 'react'
import { MdsPopoutMenuPanel } from './mds-popout-menu-panel'
import { MdsPopoutTitle } from './mds-popout-title'
import { MdsPopoutToggle } from './mds-popout-toggle'
import { ClassNameBuilder, Portal } from '../..'

export type TMdsPopoutPosition = 'bottom' | 'left' | 'right' | 'top'
export type TMdsPopoutAlign = 'bottom' | 'left' | 'right' | 'top' | 'center'
export type TMdsPopoutFocus = 'auto' | string
export type TMdsPopoutMenuSize = 'lg'

interface IComponentOwnProps {
  align?: TMdsPopoutAlign
  enablePin?: boolean
  focus?: TMdsPopoutFocus
  popoutId: string
  position?: TMdsPopoutPosition
  size?: TMdsPopoutMenuSize
  onClose?(): void
}

type IComponentProps = Readonly<IComponentOwnProps>

interface IComponentState { }

class MdsPopout extends React.Component<IComponentProps, IComponentState> {
  public static defaultProps: IComponentOwnProps = {
    position: 'bottom',
    align: 'left',
    enablePin: true,
    popoutId: ''
  }
  private instance: IMdsPopout

  componentDidMount() {
    const { children, popoutId, size, ...popoutProps } = this.props

    this.instance = window.mds.popout({id: popoutId, ...popoutProps})
  }

  componentWillUnmount() {
    this.instance.destroy()
  }

  render () {
    const { children, size, popoutId } = this.props

    return (
      <Portal>
        <div
          {
            ...{
              ...ClassNameBuilder(
                'mds-c-popout__menu',
                size ? `mds-c-popout__menu--size-${size}` : undefined
              ),
              'aria-hidden': true,
              'data-popout': popoutId
            }
          }
        >
          {children}
        </div>
      </Portal>
    )
  }
}

export { MdsPopout, MdsPopoutMenuPanel, MdsPopoutTitle, MdsPopoutToggle }
