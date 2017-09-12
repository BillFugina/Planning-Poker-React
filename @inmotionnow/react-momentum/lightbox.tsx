import * as React from 'react'
import { Portal, MdsLightbox, MdsLightboxFooter, MdsLightboxPreview } from '.'

interface IComponentOwnProps {
  dataOverlay: string
  preview: React.ReactNode
  footer: React.ReactNode
  onClose?(): void
  onOpen?(): void
  onBeforeClose?(): boolean
  onBeforeOpen?(): boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

class Lightbox extends React.Component<IComponentProps> {
  private instance: IMdsOverlay
  private type: TMdsOverlayTypes = 'lightbox'

  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { dataOverlay, onClose, onOpen, onBeforeClose, onBeforeOpen } = this.props
    let overlayConfig = { id: dataOverlay, type: this.type, onClose, onOpen, onBeforeClose, onBeforeOpen }
    this.instance = window.mds.overlay(overlayConfig)
  }

  componentWillUnmount() {
    this.instance.destroy()
  }

  render() {
    const { dataOverlay, preview, footer } = this.props
    return (
      <Portal>
        <MdsLightbox dataOverlay={dataOverlay}>
          <MdsLightboxPreview>
            {preview}
          </MdsLightboxPreview>
          <MdsLightboxFooter>
            {footer}
          </MdsLightboxFooter>
        </MdsLightbox>
      </Portal>
    )
  }
}

export { Lightbox }
