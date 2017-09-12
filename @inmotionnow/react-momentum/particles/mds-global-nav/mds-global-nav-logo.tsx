import * as React from 'react'
import { Link } from 'react-router-dom'

interface IComponentOwnProps {
  to: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGlobalNavLogo: React.StatelessComponent<IComponentProps> = props => {
  const { children, to } = props
  return (
    <Link className="mds-c-global-nav__logo" to={to}>
      {children}
    </Link>
  )
}

export { MdsGlobalNavLogo }
