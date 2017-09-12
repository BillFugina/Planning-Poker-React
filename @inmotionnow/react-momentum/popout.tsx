import * as React from 'react'
import * as uuid from 'uuid'
import { MdsPopout, TMdsPopoutPosition, TMdsPopoutAlign,
  TMdsPopoutFocus } from '.'

interface IComponentOwnProps {
  heading?: React.ReactElement<any>
  toggle?: React.ReactElement<any>
  menu?: React.ReactElement<any>
  popoutId?: string
  position?: TMdsPopoutPosition
  align?: TMdsPopoutAlign
  focus?: TMdsPopoutFocus,
  enablePin?: boolean,
  onClose?(): void
}

type IComponentProps = Readonly<IComponentOwnProps>

interface IComponentState { }

class Popout extends React.Component<IComponentProps, IComponentState> {
  private id: string = `popout-${uuid.v4()}`

  render() {
    const { props } = this
    const { popoutId, toggle, heading, menu, ...popoutProps } = props
    const id = popoutId || this.id

    const toggleWithId = toggle ? React.cloneElement(toggle, {'popoutId': id, 'data-popout-target': id}) : undefined

    const menuWithId = menu ? React.cloneElement(menu, {'popoutId': id, 'data-popout': id}) : undefined

    return (
      <MdsPopout popoutId={id} {...popoutProps}>
        {heading}
        {toggleWithId}
        {menuWithId}
      </MdsPopout>
    )
  }

}

export { Popout }
