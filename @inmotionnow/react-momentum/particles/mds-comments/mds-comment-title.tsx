/**
 * MdsCommentTitle
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsCommentTitle: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
   <div className="mds-c-comment__title">
     {children}
   </div>
  )
}

MdsCommentTitle.defaultProps = { }

export { MdsCommentTitle }
