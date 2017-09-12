import * as React from 'react'
import { ClassNameBuilder } from '../..'

export type TComponentTextOverflow = 'ellipsis'

interface IComponentOwnProps {
  textOverflow?: TComponentTextOverflow
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsInfoCardTitle: React.StatelessComponent<IComponentProps> = props => {
  const { children, textOverflow } = props

  return (
    <div
      {
        ...ClassNameBuilder(
        'mds-c-info-card__title',
        textOverflow ? `mds-h-text-overflow-${textOverflow}` : undefined
        )
      }
    >
      {children}
    </div>
  )
}

MdsInfoCardTitle.defaultProps = { }

export { MdsInfoCardTitle }
