import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsScreenReaderText: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <h1 className="mds-h-screenreader-text">
      {children}
    </h1>
  )
}

export { MdsScreenReaderText }
