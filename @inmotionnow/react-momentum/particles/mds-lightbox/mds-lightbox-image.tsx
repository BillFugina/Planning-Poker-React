import * as React from 'react'
import { ClassNameBuilder } from '../..'

interface IComponentOwnProps extends React.ImgHTMLAttributes<HTMLImageElement> { }

type IComponentProps = Readonly<IComponentOwnProps>

interface IComponentState {
  isZoomed: boolean
}

class MdsLightboxImage extends React.Component<IComponentProps, IComponentState> {

  constructor(props: IComponentProps) {
    super(props)
    this.state = { isZoomed: false }
  }

  render() {
    const { children, ...imgProps } = this.props
    const { isZoomed } = this.state
    const handleClick = (e: React.MouseEvent<HTMLImageElement>) => this.setState({ isZoomed: !this.state.isZoomed })

    return (
      <img
        {
          ...{
            ...ClassNameBuilder(
              'mds-c-lightbox__image',
              isZoomed ? 'mds-is-zoomed' : undefined
            ),
            ...imgProps,
            'data-overlay-content': '',
            onClick: handleClick
          }
        }
      />
    )
  }
}

export { MdsLightboxImage }
