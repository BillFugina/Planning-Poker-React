import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLightboxFile: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-lightbox__file">
      {children}
    </div>
  )
}

MdsLightboxFile.defaultProps = { }

export { MdsLightboxFile }
