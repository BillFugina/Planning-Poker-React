/**
 * MdsCommentContent
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsCommentContent: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className="mds-c-comment__content">
     {children}
   </div>
  )
}

MdsCommentContent.defaultProps = { }

export { MdsCommentContent }
