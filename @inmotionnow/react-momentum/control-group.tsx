import * as React from 'react'
import { MdsControlGroup, MdsControlGroupLabel, MdsControlGroupHelpText } from '.'

interface IComponentOwnProps {
  labelText?: string
  helpText?: string
  htmlFor?: string
}

type IComponentProps = Readonly<IComponentOwnProps>

const ControlGroup: React.StatelessComponent<IComponentProps> = props => {
  const { labelText, helpText, children, htmlFor } = props
  return (
    <MdsControlGroup>
      {children}
      {labelText && <MdsControlGroupLabel htmlFor={htmlFor}>{labelText}</MdsControlGroupLabel>}
      {helpText && <MdsControlGroupHelpText>{helpText}</MdsControlGroupHelpText>}
    </MdsControlGroup>
  )
}

export { ControlGroup }
