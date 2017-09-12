import * as React from 'react'

export type TMdsIconName =
  'bell' |
  'bell-badge' |
  'book-open' |
  'calendar' |
  'chat' |
  'check' |
  'check-square' |
  'cheveron-down' |
  'cheveron-left' |
  'cheveron-right' |
  'cheveron-up' |
  'close' |
  'code' |
  'contact' |
  'dashboard' |
  'dots-horizontal' |
  'download' |
  'emoticon-happy' |
  'exclamation' |
  'exclamation-circle' |
  'file-audio' |
  'file-excel' |
  'file-image' |
  'file-markup' |
  'file-pdf' |
  'file-powerpoint' |
  'file-text' |
  'file-video' |
  'file-word' |
  'folder' |
  'gear' |
  'link' |
  'logo' |
  'logout' |
  'mail' |
  'menu' |
  'merge' |
  'minus' |
  'minus-circle' |
  'open-in-new' |
  'paperclip' |
  'pencil' |
  'plus' |
  'plus-circle' |
  'power' |
  'question-mark' |
  'send' |
  'share' |
  'star' |
  'swap-horizontal' |
  'thumb-up' |
  'thumb-down' |
  'trash' |
  'view-grid' |
  'view-list'

interface IComponentOwnProps {
  name?: TMdsIconName
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsIcon: React.StatelessComponent<IComponentProps> = props => {
  const { name } = props
  return (
    <svg className="mds-c-icon">
      <use xlinkHref={`#${name}`} />
    </svg>
  )
}

MdsIcon.defaultProps = {
  name: 'logo'
}

export { MdsIcon }
