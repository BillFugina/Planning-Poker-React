import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlatMeta: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props

  return (
    <div className="mds-c-slat__meta">
      {children}
    </div>
  )
}

MdsSlatMeta.defaultProps = { }

export { MdsSlatMeta }
