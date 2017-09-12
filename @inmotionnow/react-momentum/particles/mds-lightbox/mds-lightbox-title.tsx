import * as React from 'react'

interface IComponentOwnProps {}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLightboxTitle: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <h1 className="mds-c-lightbox__title">
      {children}
    </h1>
  )
}

MdsLightboxTitle.defaultProps = { }

export { MdsLightboxTitle }
