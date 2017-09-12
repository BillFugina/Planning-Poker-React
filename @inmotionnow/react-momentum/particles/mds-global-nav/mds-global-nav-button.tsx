import * as React from 'react'

interface IComponentOwnProps extends React.HTMLAttributes<HTMLButtonElement> {
  popoutId?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGlobalNavButton: React.StatelessComponent<IComponentProps> = props => {
  const { children, popoutId, ...htmlButtonProps } = props
  return (
    <button className="mds-c-global-nav__link" data-popout-target={popoutId} {...htmlButtonProps} >
      {children}
    </button>
  )
}

export { MdsGlobalNavButton }
