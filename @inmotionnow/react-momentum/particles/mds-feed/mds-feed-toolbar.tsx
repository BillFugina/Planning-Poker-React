/**
 * MdsFeedToolbar
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFeedToolbar: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className="mds-c-feed__toolbar">
     {children}
   </div>
  )
}

MdsFeedToolbar.defaultProps = { }

export { MdsFeedToolbar }
