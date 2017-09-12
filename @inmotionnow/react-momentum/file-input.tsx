import * as React from 'react'
import { Guid } from '@inmotionnow/utilities'

interface IComponentOwnProps {
  id?: string
  multiple?: boolean
  show?: boolean
  onFilesChosen?: (files: FileList) => void
  inputref?: (fileInput: HTMLInputElement) => void
}

interface IComponentState { }

type IComponentProps = Readonly<IComponentOwnProps>

class FileInput extends React.Component<IComponentProps, IComponentState> {
  private id: string

  constructor(props?: IComponentProps, context?: any) {
    super(props, context)
    this.id = props.id || `file-input-${Guid.NewId()}`
  }

  handleFileListChange: (e: React.ChangeEvent<HTMLInputElement>) => void = e => {
    const files = e.target.files
    if (this.props.onFilesChosen) {
      this.props.onFilesChosen(files)
    }
    e.target.value = null
  }

  render() {
    const { id } = this
    const { multiple, show, inputref } = this.props
    return (
      <input id={id} ref={inputref} type="file" onChange={this.handleFileListChange} multiple={multiple} style={show ? {} : {display: 'none'}} />
    )
  }
}

export { FileInput }
