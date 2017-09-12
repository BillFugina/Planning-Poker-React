import * as React from 'react'

interface IComponentOwnProps {
  LoadingText: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLoading: React.StatelessComponent<IComponentProps> = props => {
  const { LoadingText } = props
  return (
    <div className="mds-c-loading-balls">
      <div className="mds-c-loading-ball" />
      <div className="mds-c-loading-ball" />
      <div className="mds-c-loading-ball" />
      <div className="mds-c-loading-ball" />
      <div className="mds-c-loading-ball" />
      <div className="mds-h-screenreader-text">{LoadingText}</div>
    </div>
  )
}

export { MdsLoading }
