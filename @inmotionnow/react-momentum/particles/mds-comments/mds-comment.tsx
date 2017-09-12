/**
 * MdsComment
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsComment: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className="mds-c-comment">
     {children}
   </div>
  )
}

MdsComment.defaultProps = { }

export { MdsComment }
