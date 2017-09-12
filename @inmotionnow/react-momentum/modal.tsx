import * as React from 'react'
import { Portal, MdsModal, MdsModalBody, MdsModalClose, MdsModalContent, MdsModalFooter, MdsModalHeader, MdsModalTitle, MdsIcon, MdsButton } from '.'

interface IComponentOwnProps {
  dataOverlay: string
  title: string
  body: React.ReactNode
  footer: React.ReactNode
  disabled?: boolean
  focus?: TMdsOverlayFocus
  onClose?(): void
  onOpen?(): void
  onBeforeClose?(): boolean
  onBeforeOpen?(): boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

class Modal extends React.Component<IComponentProps> {
  private instance: IMdsOverlay
  private type: TMdsOverlayTypes = 'modal'

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dataOverlay, onClose, onOpen, focus, onBeforeClose, onBeforeOpen } = this.props
    let overlayConfig = { id: dataOverlay, type: this.type, focus, onClose, onOpen, onBeforeClose, onBeforeOpen }
    this.instance = window.mds.overlay(overlayConfig)
  }

  componentWillUnmount() {
    this.instance.destroy()
  }

  render() {
    const { dataOverlay, title, body, footer, disabled } = this.props
    return (
      <Portal>
        <MdsModal dataOverlay={dataOverlay}>
          <MdsModalContent>
            <MdsModalHeader>
              <MdsModalTitle>{title}</MdsModalTitle>
              <MdsModalClose>
                <MdsButton appearance="flat" dataOverlayClose={dataOverlay} disabled={disabled}>
                  <MdsIcon name="close"/>
                </MdsButton>
              </MdsModalClose>
            </MdsModalHeader>
            <MdsModalBody>
              {body}
            </MdsModalBody>
            <MdsModalFooter>
              {footer}
            </MdsModalFooter>
          </MdsModalContent>
        </MdsModal>
      </Portal>
    )
  }
}

export { Modal }
