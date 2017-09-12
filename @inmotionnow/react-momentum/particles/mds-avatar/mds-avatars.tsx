import * as React from 'react'

interface IComponentOwnProps {
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsAvatars: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props

  return (
    <ul className="mds-c-avatars">
      {children}
    </ul>
  )
}

MdsAvatars.defaultProps = { }

export { MdsAvatars }
