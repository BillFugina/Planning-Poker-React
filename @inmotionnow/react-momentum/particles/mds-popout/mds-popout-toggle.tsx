import * as React from 'react'

interface IComponentOwnProps {
  popoutId?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsPopoutToggle: React.StatelessComponent<IComponentProps> = props => {
  const { children, popoutId } = props
  return (
    <button className="mds-c-link" data-popout-target={popoutId}>
      {children}
    </button>
  )
}

export { MdsPopoutToggle }
