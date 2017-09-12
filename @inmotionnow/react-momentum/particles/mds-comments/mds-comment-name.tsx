/**
 * MdsCommentName
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsCommentName: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <span className="mds-c-comment__name">
     {children}
   </span>
  )
}

MdsCommentName.defaultProps = { }

export { MdsCommentName }
