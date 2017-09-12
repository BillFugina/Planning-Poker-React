import * as React from 'react'
import { MdsLightboxFileDownload } from './mds-lightbox-file-download'
import { MdsLightboxFileIcon } from './mds-lightbox-file-icon'
import { MdsLightboxFileName } from './mds-lightbox-file-name'
import { MdsLightboxFileSize } from './mds-lightbox-file-size'
import { MdsLightboxFile } from './mds-lightbox-file'
import { MdsLightboxFooter } from './mds-lightbox-footer'
import { MdsLightboxImage } from './mds-lightbox-image'
import { MdsLightboxPreview } from './mds-lightbox-preview'
import { MdsLightboxTitle } from './mds-lightbox-title'

interface IComponentOwnProps {
  dataOverlay: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLightbox: React.StatelessComponent<IComponentProps> = props => {
  const { children, dataOverlay } = props
  return (
    <div className="mds-c-lightbox" data-overlay={dataOverlay}>
      {children}
    </div>
  )
}

MdsLightbox.defaultProps = { }

export { MdsLightbox, MdsLightboxFileDownload, MdsLightboxFileIcon, MdsLightboxFileName,
  MdsLightboxFileSize, MdsLightboxFile, MdsLightboxFooter, MdsLightboxImage,
  MdsLightboxPreview, MdsLightboxTitle }
