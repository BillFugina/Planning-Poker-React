import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMediaCardMeta: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props

  return (
    <ul className="mds-c-media-card__meta">
      {children}
    </ul>
  )
}

MdsMediaCardMeta.defaultProps = { }

export { MdsMediaCardMeta }
