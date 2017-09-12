import * as React from 'react'
import { MdsButton, MdsIcon, MdsTags, MdsTag, TMdsIconName, MdsPopout, FileIcon } from '.'
import {
  MdsMediaCard, MdsMediaCardImage, MdsMediaCardInfo, MdsMediaCardTitle, MdsMediaCardSubtitle,
  MdsMediaCardMeta, MdsMediaCardMetaItem, MdsBadgeList, IMdsBadgeComponentProps
} from './particles'

export interface IMediaFile {
  Title: string // Title
  Name: string  // Subtitle
  MimeType: string
  Uri: string
  IsImage: boolean
}

export interface IMediaCardIcon {
  name: TMdsIconName
  text?: string
}

interface IComponentOwnProps {
  file: IMediaFile
  popoutContent: React.ReactElement<any>
  tags?: string[],
  icons?: IMediaCardIcon[],
  badges?: IMdsBadgeComponentProps[],
  popoutId?: string
  thumbnailClickUrl: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MediaCard: React.StatelessComponent<IComponentProps> = props => {
  const { file, tags, icons, badges, popoutId, popoutContent, children,
    thumbnailClickUrl } = props

  return (
    <MdsMediaCard>
      <MdsMediaCardImage to={thumbnailClickUrl}>
        {file.IsImage && <img {...{ src: file.Uri, alt: file.Title }} />}
        <FileIcon {...{ mimeType: file.MimeType, src: file.Uri }} />
      </MdsMediaCardImage>
      <MdsMediaCardInfo>
        {tags && <MdsTags>
          {tags.map(tag => <MdsTag tagValue={tag}/>)}
        </MdsTags>}
        <MdsMediaCardTitle>{file.Title}</MdsMediaCardTitle>
        <MdsMediaCardSubtitle>{file.Name}</MdsMediaCardSubtitle>
        {icons && <MdsMediaCardMeta>
          {icons.map(icon => (<MdsMediaCardMetaItem>
            <MdsIcon name={icon.name} />
            {icon.text && <span>{' '}{icon.text}</span>}
          </MdsMediaCardMetaItem>))}
        </MdsMediaCardMeta>}
        {badges && <MdsBadgeList badges={badges} />}
      </MdsMediaCardInfo>
      {children}
      <MdsButton appearance={'flat'} popoutTarget={popoutId}>
        <MdsIcon name="dots-horizontal" />
        <MdsPopout
          align="right"
          position="top"
          popoutId={popoutId}
          enablePin={false}
        >
          {popoutContent}
        </MdsPopout>
      </MdsButton>
    </MdsMediaCard>
  )
}

MediaCard.defaultProps = {}

export { MediaCard }
