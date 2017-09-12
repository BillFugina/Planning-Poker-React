import * as React from 'react'
import { ClassNameBuilder } from '../..'

export type TComponentTextOverflow = 'ellipsis'

interface IComponentOwnProps {
  textOverflow?: TComponentTextOverflow
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsInfoCardSubtitle: React.StatelessComponent<IComponentProps> = props => {
  const { children, textOverflow } = props

  return (
    <div
      {
        ...ClassNameBuilder(
        'mds-c-info-card__subtitle',
        textOverflow ? `mds-h-text-overflow-${textOverflow}` : undefined
        )
      }
    >
      {children}
    </div>
  )
}

MdsInfoCardSubtitle.defaultProps = { }

export { MdsInfoCardSubtitle }
