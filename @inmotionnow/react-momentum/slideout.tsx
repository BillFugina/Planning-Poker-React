import * as React from 'react'
import { Portal, MdsSlideout, MdsSlideoutPanel, MdsSlideoutClose, MdsButton, MdsIcon } from '.'

interface IComponentTranslationsProps {
  CloseText: string
}

interface IComponentOwnProps {
  content: React.ReactNode
  dataOverlay: string
  translations: IComponentTranslationsProps
  onClose?(): void
  onOpen?(): void
  onBeforeClose?(): boolean
  onBeforeOpen?(): boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

class Slideout extends React.Component<IComponentProps> {
  private instance: IMdsOverlay
  private type: TMdsOverlayTypes = 'slideout'

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
    const { content, dataOverlay, translations } = this.props
    return (
      <Portal>
        <MdsSlideout dataOverlay={dataOverlay}>
          <MdsSlideoutPanel>
            <MdsSlideoutClose>
              <MdsButton appearance="flat" ariaLabel={translations.CloseText} dataOverlayClose={dataOverlay}>
                <MdsIcon name="close"/>
              </MdsButton>
            </MdsSlideoutClose>
            {content}
          </MdsSlideoutPanel>
        </MdsSlideout>
      </Portal>
    )
  }
}

export { Slideout }
