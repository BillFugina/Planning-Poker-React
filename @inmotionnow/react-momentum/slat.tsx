import * as React from 'react'
import { MdsSlat, MdsSlatLeft, MdsSlatRight } from '.'

interface IComponentOwnProps {
  left: React.ReactNode
  right: React.ReactNode
  onClick?: React.MouseEventHandler<HTMLDivElement>
  loading?: boolean
}

type IComponentProps = Readonly<IComponentOwnProps>

const Slat: React.StatelessComponent<IComponentProps> = props => {
  const { left, right, onClick, loading } = props
  return (
    <MdsSlat {...{onClick, loading}} >
      <MdsSlatLeft>
        {left}
      </MdsSlatLeft>
      <MdsSlatRight>
        {right}
      </MdsSlatRight>
    </MdsSlat>
  )
}

export { Slat }
