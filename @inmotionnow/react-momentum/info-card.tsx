import * as React from 'react'
import { IMdsInfoCardTag, MdsInfoCard, MdsInfoCardInfo } from '.'

interface IComponentOwnProps {
  tag?: IMdsInfoCardTag
  icon?: React.ReactNode
  popoutId?: string
  title: React.ReactNode
  subtitle: React.ReactNode
}

type IComponentProps = Readonly<IComponentOwnProps>

const InfoCard: React.StatelessComponent<IComponentProps> = props => {
  const { tag, icon, title, subtitle, popoutId, children } = props
  return (
      <MdsInfoCard tag={tag} popoutId={popoutId}>
        {icon}
        <MdsInfoCardInfo>
          {title}
          {subtitle}
        </MdsInfoCardInfo>
        {children}
      </MdsInfoCard>
  )
}

InfoCard.defaultProps = {
  tag: 'button'
}

export { InfoCard }
