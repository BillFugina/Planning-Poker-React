import * as React from 'react'
import { MdsFileUpload, MdsFileUploadContent, MdsFileUploadLabel } from './particles/mds-file-upload'
import { Guid } from '@inmotionnow/utilities'

interface IComponentOwnProps {
  id?: string
  text?: string
  multiple?: boolean
  onFilesChosen?: (files: FileList) => void
}

interface IComponentState { }

type IComponentProps = Readonly<IComponentOwnProps>

class FileUpload extends React.Component<IComponentProps, IComponentState> {
  id: string

  constructor(props?: IComponentProps, context?: any) {
    super(props, context)
    this.id = props.id || `file-upload-${Guid.NewId()}`
  }

  windowDragHandler = (e) => {
    e.preventDefault()
  }

  componentWillMount() {
    window.addEventListener('dragover', this.windowDragHandler, false)
    window.addEventListener('drop', this.windowDragHandler, false)
  }

  componentWillUnmount() {
    window.removeEventListener('drop', this.windowDragHandler)
    window.removeEventListener('dragover', this.windowDragHandler)
  }

  handleFileListChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const files = e.target.files
    if (this.props.onFilesChosen) {
      this.props.onFilesChosen(files)
    }
    e.target.value = null
  }

  handleFileDrop: (e: React.DragEvent<HTMLLabelElement>) => void = e => {
    e.stopPropagation()
    e.preventDefault()
    const files = e.dataTransfer.files
    if (this.props.onFilesChosen) {
      this.props.onFilesChosen(files)
    }
  }

  render() {
    const { text, multiple } = this.props
    const id = this.id
    return (
      <MdsFileUpload htmlFor={id} onDrop={this.handleFileDrop}>
        <MdsFileUploadContent>
          {text && <MdsFileUploadLabel>{text}</MdsFileUploadLabel>}
        </MdsFileUploadContent>
        <input id={id} type="file" onChange={this.handleFileListChange} multiple={multiple} />
      </MdsFileUpload>
    )
  }
}

export { FileUpload }
