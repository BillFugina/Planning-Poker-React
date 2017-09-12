import * as React from 'react'
import { MdsTags, MdsTag } from '.'

interface IComponentTranslationsProps {
  PlusMoreText(more): string
}

interface IComponentOwnProps {
  tags: string[]
  show?: number
  translations: IComponentTranslationsProps
}

type IComponentProps = Readonly<IComponentOwnProps>

const TagGroup: React.StatelessComponent<IComponentProps> = props => {
  const { tags, show, translations } = props
  const count = Math.max(show, 0)
  const more = tags.length <= count ? 0 : (tags.length - count)
  const visibleTags = (tags && show) ? more ? tags.slice(0, count) : tags : []

  return (
    <MdsTags>
      {visibleTags.map(tag => <MdsTag tagValue={tag} truncated={true}/>)}
      {more > 0 && show && <MdsTag tagValue={'...'} title={translations.PlusMoreText(more)}/>}
    </MdsTags>
  )
}

TagGroup.defaultProps = {
  show: 2
}

export { TagGroup }
