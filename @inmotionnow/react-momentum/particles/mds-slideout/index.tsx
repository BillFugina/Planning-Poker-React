import * as React from 'react'
import { MdsSlideoutClose } from './mds-slideout-close'
import { MdsSlideoutPanel } from './mds-slideout-panel'

interface IComponentOwnProps {
  dataOverlay: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlideout: React.StatelessComponent<IComponentProps> = props => {
  const { children, dataOverlay } = props
  return (
    <div className="mds-l-slideout" data-overlay={dataOverlay}>
      {children}
    </div>
  )
}

MdsSlideout.defaultProps = { }

export { MdsSlideout, MdsSlideoutClose, MdsSlideoutPanel }
