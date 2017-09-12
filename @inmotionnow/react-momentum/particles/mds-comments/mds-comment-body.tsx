/**
 * MdsCommentBody
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsCommentBody: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className="mds-c-comment__body">
     {children}
   </div>
  )
}

MdsCommentBody.defaultProps = { }

export { MdsCommentBody }
