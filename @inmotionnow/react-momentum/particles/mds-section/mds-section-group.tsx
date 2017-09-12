import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSectionGroup: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-l-section-group">
      {children}
    </div>
  )
}

MdsSectionGroup.defaultProps = { }

export { MdsSectionGroup }
