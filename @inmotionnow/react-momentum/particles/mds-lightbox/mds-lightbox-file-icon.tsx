import * as React from 'react'

interface IComponentOwnProps {}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLightboxFileIcon: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-lightbox__file-icon">
      {children}
    </div>
  )
}

MdsLightboxFileIcon.defaultProps = { }

export { MdsLightboxFileIcon }
