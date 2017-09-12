import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMediaCardSubtitle: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-media-card__subtitle">
      {children}
    </div>
  )
}

MdsMediaCardSubtitle.defaultProps = { }

export { MdsMediaCardSubtitle }
