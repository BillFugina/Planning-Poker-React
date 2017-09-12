import * as React from 'react'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLightboxFooter: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <footer className="mds-c-lightbox__footer" data-overlay-content="">
      {children}
    </footer >
  )
}

MdsLightboxFooter.defaultProps = { }

export { MdsLightboxFooter }
