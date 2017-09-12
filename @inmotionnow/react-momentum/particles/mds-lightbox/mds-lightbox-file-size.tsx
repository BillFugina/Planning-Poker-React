import * as React from 'react'

interface IComponentOwnProps {}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLightboxFileSize: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-lightbox__file-size">
      {children}
    </div>
  )
}

MdsLightboxFileSize.defaultProps = { }

export { MdsLightboxFileSize }
