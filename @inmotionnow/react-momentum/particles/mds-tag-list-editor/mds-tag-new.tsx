import * as React from 'react'

interface IComponentOwnProps {
  placeholder?: string,
  maxLength?: number,
  getInputNode?: (node: HTMLInputElement) => any
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTagNew: React.StatelessComponent<IComponentProps> = props => {
  const { placeholder, maxLength, getInputNode } = props
  return (
    <li>
      <input className="mds-c-tag-typeahead__control" placeholder={placeholder} data-input={true} maxLength={maxLength} ref={getInputNode}/>
    </li>
  )
}

MdsTagNew.defaultProps = {
  maxLength: 50
}

export { MdsTagNew }
