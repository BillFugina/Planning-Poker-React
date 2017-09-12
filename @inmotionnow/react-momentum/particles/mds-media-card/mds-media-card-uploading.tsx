import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMediaCardUploading: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props

  return (
    <div className="mds-c-media-card__uploading">
      {children}
    </div>
  )
}

MdsMediaCardUploading.defaultProps = { }

export { MdsMediaCardUploading }
