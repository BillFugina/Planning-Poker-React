import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMastheadSection: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-masthead__section">
      {children}
    </div>
  )
}

MdsMastheadSection.defaultProps = { }

export { MdsMastheadSection }
