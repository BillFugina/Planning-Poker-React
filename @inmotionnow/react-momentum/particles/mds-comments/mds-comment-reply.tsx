/**
 * CommentReply
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const CommentReply: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <li className="mds-c-comments__reply">
     {children}
   </li>
  )
}

CommentReply.defaultProps = { }

export { CommentReply }
