/**
 * MdsCommentGroup
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsCommentGroup: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <ul className="mds-c-comments">
     {children}
   </ul>
  )
}

MdsCommentGroup.defaultProps = { }

export { MdsCommentGroup }
