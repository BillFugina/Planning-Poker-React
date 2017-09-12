import * as React from 'react'
import { MdsSlatItem } from './mds-slat-item'
import { MdsSlatLeft } from './mds-slat-left'
import { MdsSlatMeta } from './mds-slat-meta'
import { MdsSlatRight } from './mds-slat-right'
import { MdsSlatTitle } from './mds-slat-title'
import { MdsSlat } from './mds-slat'

interface IComponentOwnProps { }

type IComponentProps = Readonly<IComponentOwnProps>

const MdsSlats: React.StatelessComponent<IComponentProps> = props => {
  const { children } = props
  return (
    <ul className="mds-c-slats">
      {children}
    </ul>
  )
}

MdsSlats.defaultProps = { }

export { MdsSlats, MdsSlat, MdsSlatItem, MdsSlatLeft, MdsSlatMeta, MdsSlatRight, MdsSlatTitle }
