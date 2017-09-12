/**
 * MdsCommentAvatar
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsCommentAvatar: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className="mds-c-comment__avatar">
     {children}
   </div>
  )
}

MdsCommentAvatar.defaultProps = { }

export { MdsCommentAvatar }
