import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFileUploadLabel: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props

  return (
    <div className="mds-c-file-upload__label" >
      {children}
    </div>
  )
}

export { MdsFileUploadLabel }
