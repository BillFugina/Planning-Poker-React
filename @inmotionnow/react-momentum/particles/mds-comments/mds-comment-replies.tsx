/**
 * CommentReplies
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const CommentReplies: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <ul className="mds-c-comments__replies">
     {children}
   </ul>
  )
}

CommentReplies.defaultProps = { }

export { CommentReplies }
