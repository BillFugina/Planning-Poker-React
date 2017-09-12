import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMastheadTitle: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <h1 className="mds-c-masthead__title">
      {children}
    </h1>
  )
}

MdsMastheadTitle.defaultProps = { }

export { MdsMastheadTitle }
