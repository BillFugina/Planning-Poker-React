import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsContent: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-content">
      {children}
    </div>
  )
}

MdsContent.defaultProps = { }

export { MdsContent }
