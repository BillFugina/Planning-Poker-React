import * as React from 'react'
import { MdsTabLink } from './mds-tab-link'
import { MdsTabList } from './mds-tab-list'
import { MdsTab } from './mds-tab'
import { MdsTabsSection } from './mds-tabs-section'

interface IComponentOwnProps {
  id: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTabs: React.StatelessComponent<IComponentProps> = props => {
  const { id, children } = props
  return (
    <div id={id} className="mds-c-tabs mds-js-tabs">
      {children}
    </div>
  )
}

export { MdsTabs, MdsTabList, MdsTab, MdsTabLink, MdsTabsSection }
