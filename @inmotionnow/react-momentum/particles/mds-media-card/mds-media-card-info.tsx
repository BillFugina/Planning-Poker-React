import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMediaCardInfo: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props

  return (
    <figcaption className="mds-c-media-card__info">
      {children}
    </figcaption>
  )
}

MdsMediaCardInfo.defaultProps = { }

export { MdsMediaCardInfo }
