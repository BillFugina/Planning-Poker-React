import * as React from 'react'
import { Link } from 'react-router-dom'

interface IComponentOwnProps {
  to: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMediaCardImage: React.StatelessComponent<IComponentProps> = props => {
  const { children, to } = props

  return (
    <Link className="mds-c-media-card__image" to={to}>
      {children}
    </Link>
  )
}

MdsMediaCardImage.defaultProps = { }

export { MdsMediaCardImage }
