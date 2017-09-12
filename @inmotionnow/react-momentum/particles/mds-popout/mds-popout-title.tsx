import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsPopoutTitle: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-popout__title">
      {children}
    </div>
  )
}

export { MdsPopoutTitle }
