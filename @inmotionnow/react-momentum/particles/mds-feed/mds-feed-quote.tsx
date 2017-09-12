/**
 * MdsFeedQuote
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFeedQuote: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <span className="mds-c-feed__quote">
     {children}
   </span>
  )
}

MdsFeedQuote.defaultProps = { }

export { MdsFeedQuote }
