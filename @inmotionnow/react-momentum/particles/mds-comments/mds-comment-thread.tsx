/**
 * CommentThread
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsCommentThread: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <li className="mds-c-comments__thread">
     {children}
   </li>
  )
}

MdsCommentThread.defaultProps = { }

export { MdsCommentThread }
