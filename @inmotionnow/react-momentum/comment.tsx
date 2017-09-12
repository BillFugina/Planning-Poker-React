/**
 * Comment
 */

import * as React from 'react'
import { MdsComment } from './particles/mds-comments/mds-comment'

interface IComponentOwnProps {
  avatar: React.ReactNode
  body: React.ReactNode
}

type IComponentProps = Readonly<IComponentOwnProps>

const Comment: React.StatelessComponent<IComponentProps> = props => {
  const { avatar, body } = props
  return (
   <MdsComment>
     {avatar}
     {body}
   </MdsComment>
  )
}

Comment.defaultProps = { }

export { Comment }
