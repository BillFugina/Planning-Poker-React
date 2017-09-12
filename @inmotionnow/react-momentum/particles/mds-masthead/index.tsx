import * as React from 'react'
import { MdsMastheadGroup } from './mds-masthead-group'
import { MdsMastheadSection } from './mds-masthead-section'
import { MdsMastheadTitle } from './mds-masthead-title'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsMasthead: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <header className="mds-c-masthead">
      {children}
    </header>
  )
}

MdsMasthead.defaultProps = { }

export { MdsMasthead, MdsMastheadGroup, MdsMastheadSection, MdsMastheadTitle }
