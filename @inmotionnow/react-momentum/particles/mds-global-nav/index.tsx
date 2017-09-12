import * as React from 'react'

import { IMdsComponentTag } from '../..'

export type IMdsGlobalNavTag = IMdsComponentTag<'div' | 'ul'>

interface IComponentOwnProps {
  tag?: IMdsGlobalNavTag
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGlobalNav: React.StatelessComponent<IComponentProps> = props => {
  const { children, tag: Tag } = props
  return (
    <Tag className="mds-c-global-nav">
      {children}
    </Tag>
  )
}

MdsGlobalNav.defaultProps = {
  tag: 'div'
}

export { MdsGlobalNavButton } from './mds-global-nav-button'
export { MdsGlobalNavIcon } from './mds-global-nav-icon'
export { MdsGlobalNavItem } from './mds-global-nav-item'
export { MdsGlobalNavLabel } from './mds-global-nav-label'
export { MdsGlobalNavLink } from './mds-global-nav-link'
export { MdsGlobalNavList } from './mds-global-nav-list'
export { MdsGlobalNavLogo } from './mds-global-nav-logo'
export { MdsGlobalNav }
