import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlatLeft: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-slat__left">
      {children}
    </div>
  )
}

MdsSlatLeft.defaultProps = { }

export { MdsSlatLeft }
