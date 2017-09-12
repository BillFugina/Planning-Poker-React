import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLightboxPreview: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <main className="mds-c-lightbox__preview">
      {children}
    </main>
  )
}

MdsLightboxPreview.defaultProps = { }

export { MdsLightboxPreview }
