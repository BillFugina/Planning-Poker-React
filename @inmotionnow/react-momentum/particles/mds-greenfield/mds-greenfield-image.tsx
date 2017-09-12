import * as React from 'react'

interface IComponentOwnProps extends React.ImgHTMLAttributes<HTMLImageElement> { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsGreenfieldImage: React.StatelessComponent<IComponentProps> = props => {
  return <img className="mds-c-greenfield__image" {...props} />
}

export { MdsGreenfieldImage }
