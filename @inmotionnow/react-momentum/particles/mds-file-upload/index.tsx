import * as React from 'react'
import { MdsFileUploadContent } from './mds-file-upload-content'
import { MdsFileUploadLabel } from './mds-file-upload-label'

interface IComponentOwnProps {
  htmlFor: string
  onDrop: React.DragEventHandler<HTMLLabelElement>
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFileUpload: React.StatelessComponent<IComponentProps> = props => {
  const { htmlFor, children, onDrop } = props
  return (
    <label htmlFor={htmlFor} className="mds-c-file-upload mds-js-file-upload" onDrop={onDrop}>
      {children}
    </label>
  )
}

export { MdsFileUpload, MdsFileUploadContent, MdsFileUploadLabel }
