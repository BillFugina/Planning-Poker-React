import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMastheadGroup: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-masthead__group">
      {children}
    </div>
  )
}

MdsMastheadGroup.defaultProps = { }

export { MdsMastheadGroup }
