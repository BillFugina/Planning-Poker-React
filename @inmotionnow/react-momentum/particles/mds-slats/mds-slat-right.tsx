import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlatRight: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-slat__right">
      {children}
    </div>
  )
}

MdsSlatRight.defaultProps = { }

export { MdsSlatRight }
