import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMediaCardMetaItem: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props

  return (
    <li className="mds-c-media-card__meta-item">
      {children}
    </li>
  )
}

MdsMediaCardMetaItem.defaultProps = { }

export { MdsMediaCardMetaItem }
