import * as React from 'react'
import { MdsModalBody } from './mds-modal-body'
import { MdsModalClose } from './mds-modal-close'
import { MdsModalContent } from './mds-modal-content'
import { MdsModalHeader } from './mds-modal-header'
import { MdsModalFooter } from './mds-modal-footer'
import { MdsModalTitle } from './mds-modal-title'

interface IComponentOwnProps {
  dataOverlay: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsModal: React.StatelessComponent<IComponentProps> = props => {
  const { children, dataOverlay } = props
  return (
    <div className="mds-c-modal" data-overlay={dataOverlay}>
      {children}
    </div>
  )
}

MdsModal.defaultProps = { }

export { MdsModal, MdsModalBody, MdsModalClose, MdsModalContent, MdsModalHeader, MdsModalFooter, MdsModalTitle }
