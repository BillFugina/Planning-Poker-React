import * as React from 'react'
import * as mime from 'mime-types'
import { TMdsIconName, MdsIcon } from '@inmotionnow/react-momentum'

const useIcon = (icon: TMdsIconName): { forExtensions: (...extensions: string[]) => { [extension: string]: TMdsIconName } } => {
  return {
    forExtensions: (...extensions: string[]) => extensions.reduce((thumbnails, ext) => { return { ...thumbnails, [ext]: icon } }, {} )
  }
}

const fileIcons: { [extension: string]: TMdsIconName } = {
  ...useIcon('file-audio').forExtensions('mp3', 'm4a', 'mpga', 'wav'),
  ...useIcon('file-excel').forExtensions('csv', 'xls', 'xlsb', 'xlsm', 'xlsx'),
  ...useIcon('file-image').forExtensions('bmp', 'gif', 'jpeg', 'png', 'svg', 'tiff', 'ico'),
  ...useIcon('file-markup').forExtensions('html', 'xml'),
  ...useIcon('file-pdf').forExtensions('pdf'),
  ...useIcon('file-powerpoint').forExtensions('ppt', 'pptm', 'pptx'),
  ...useIcon('file-text').forExtensions('rtf', 'txt'),
  ...useIcon('file-video').forExtensions('mp4', 'mpeg', 'qt', 'm4v', 'wmv'),
  ...useIcon('file-word').forExtensions('doc', 'docx', 'dotx')
}

interface IComponentOwnProps {
  src: string
  mimeType?: string
}

type IComponentProps = IComponentOwnProps

const FileIcon: React.StatelessComponent<IComponentProps> = props => {
  const { src, mimeType } = props
  return <MdsIcon {...{ name: fileIcons[mime.extension(mimeType || mime.lookup(src) || 'text/plain') || 'txt'] || 'file-text' }} />
}

export { FileIcon }
