import * as React from 'react'
import { MdsGreenfield, MdsGreenfieldTitle, MdsGreenfieldImage, MdsGreenfieldCta } from '.'

interface IComponentOwnProps {
  image: string
  title: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const Greenfield: React.StatelessComponent<IComponentProps> = props => {
  const { children, image: src, title: alt, title } = props
  return (
    <MdsGreenfield>
      <MdsGreenfieldImage {...{ src, alt }} />
      <MdsGreenfieldTitle>{title}</MdsGreenfieldTitle>
      <MdsGreenfieldCta>
        {children}
      </MdsGreenfieldCta>
    </MdsGreenfield>
  )
}

export { Greenfield }
