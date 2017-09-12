import * as React from 'react'

interface IComponentOwnProps {
  htmlFor: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsControlGroupLabel: React.StatelessComponent<IComponentProps> = props => {
  const { children, htmlFor } = props
  return (
    <label className="mds-c-control-group__label" htmlFor={htmlFor}>
      {children}
    </label >
  )
}

MdsControlGroupLabel.defaultProps = { }

export { MdsControlGroupLabel }
