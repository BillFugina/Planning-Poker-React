import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsFileUploadContent: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props

  return (
    <div className="mds-c-file-upload__content" >
      {children}
    </div>
  )
}

export { MdsFileUploadContent }
