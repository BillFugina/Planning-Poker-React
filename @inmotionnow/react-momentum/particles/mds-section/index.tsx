import * as React from 'react'
import { ClassNameBuilder } from '../..'
import { MdsSectionGroup } from './mds-section-group'

type TMdsSectionPadding = 'xxxl' | 'xxl' | 'xl' | 'lg' | 'med' | 'sm' | 'xs' | 'xxs'
type TMdsSectionBackground = 'alt'

interface IComponentOwnProps {
  padding?: TMdsSectionPadding
  xPadding?: TMdsSectionPadding
  yPadding?: TMdsSectionPadding
  background?: TMdsSectionBackground
  divided?: boolean
  customClass?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSection: React.StatelessComponent<IComponentProps> = props => {
  const { children, padding, xPadding, yPadding, background, divided, customClass } = props
  return (
    <section
      {
        ...ClassNameBuilder(
          'mds-l-section',
          padding ? `mds-l-section--size-${padding}` : undefined,
          xPadding ? `mds-l-section--size-x-${xPadding}` : undefined,
          yPadding ? `mds-l-section--size-y-${yPadding}` : undefined,
          background ? `mds-l-section--${background}` : undefined,
          divided ? 'mds-l-section--divided' : undefined,
          customClass
        )
      }
    >
      {children}
    </section>
  )
}

MdsSection.defaultProps = {
  padding: 'xl'
}

export { MdsSection, MdsSectionGroup }
