import * as React from 'react'

interface IComponentOwnProps {}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLightboxFileName: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-lightbox__file-name">
      {children}
    </div>
  )
}

MdsLightboxFileName.defaultProps = { }

export { MdsLightboxFileName }
