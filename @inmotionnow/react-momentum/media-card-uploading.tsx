/**
 * MediaCardUploading
 */

import * as React from 'react'
import { MdsMediaCard, MdsMediaCardInfo, MdsMediaCardSubtitle, FileIcon } from '.'
import { MdsMediaCardUploading } from './particles/mds-media-card/mds-media-card-uploading'
import { MdsProgressBar, IProgressTheme } from './particles/mds-progress'

interface IComponentOwnProps {
  src: string
  text: string
  theme: IProgressTheme
  percent: number
}

type IComponentProps = Readonly<IComponentOwnProps>

const MediaCardUploading: React.StatelessComponent<IComponentProps> = props => {
  const { src, text, theme, percent } = props
  return (
    <MdsMediaCard>
      <MdsMediaCardUploading>
        <MdsMediaCardInfo>
          <FileIcon {...{ src }} />
          <MdsMediaCardSubtitle>{text}</MdsMediaCardSubtitle>
        </MdsMediaCardInfo>
        <MdsProgressBar {...{ theme, percent }} />
      </MdsMediaCardUploading>
    </MdsMediaCard>
  )
}

MediaCardUploading.defaultProps = {}

export { MediaCardUploading }
