/**
 * MdsCommentTimeStamp
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsCommentTimestamp: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <span className="mds-c-comment__timestamp">
     {children}
   </span>
  )
}

MdsCommentTimestamp.defaultProps = { }

export { MdsCommentTimestamp }
