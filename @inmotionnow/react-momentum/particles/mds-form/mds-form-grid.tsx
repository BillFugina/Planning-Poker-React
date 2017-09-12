import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFormGrid: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-form__grid">
      {children}
    </div>
  )
}

MdsFormGrid.defaultProps = { }

export { MdsFormGrid }
