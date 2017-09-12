import * as React from 'react'
import { MdsView } from '.'

interface IComponentOwnProps {
  header: React.ReactNode
  main: React.ReactNode
  footer: React.ReactNode
}

type IComponentProps = Readonly<IComponentOwnProps>

const View: React.StatelessComponent<IComponentProps> = props => {
  const { header, main, footer } = props
  return (
    <MdsView>
      {header}
      {main}
      {footer}
    </MdsView>
  )
}

export { View }
