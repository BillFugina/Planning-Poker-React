/**
 * MdsCommentsNew
 */

import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsCommentNew: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <div className="mds-c-comments__new">
      {children}
    </div>
  )
}

MdsCommentNew.defaultProps = {}

export { MdsCommentNew }
