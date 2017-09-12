import * as React from 'react'
interface IComponentOwnProps {
  name: string
  href: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLightboxFileDownload: React.StatelessComponent<IComponentProps> = props => {
  const { children, href } = props
  return (
    <a {...{ className: 'mds-c-lightbox__file-download', 'data-overlay-content': '', href }}>
      {children}
    </a>
  )
}

MdsLightboxFileDownload.defaultProps = { }

export { MdsLightboxFileDownload }
