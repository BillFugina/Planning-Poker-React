import * as React from 'react'

interface IComponentOwnProps {
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsApplicationWrapper: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-l-application-wrapper">
      {children}
    </div>
  )
}

export { MdsApplicationWrapper }
