import * as React from 'react'
import { ClassNameBuilder } from '../..'

interface IComponentOwnProps {
  theme?: 'primary' | 'secondary' | 'info' | 'success' | 'warning' | 'danger' | 'muted'
  appearance?: 'dot'
  tagValue?: string,
  title?: string,
  truncated?: boolean,
  isHighlighted?: boolean
  onTagClick?(event: React.MouseEvent<Element>): void
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsTag: React.StatelessComponent<IComponentProps> = props => {
  const { children, theme, appearance, tagValue, title, truncated, onTagClick, isHighlighted } = props
  return (
    <li
      {
        ...ClassNameBuilder(
          'mds-c-tag',
          theme ? `mds-c-tag--theme-${theme}` : undefined,
          appearance ? `mds-c-tag--appearance-${appearance}` : undefined,
          truncated ? `mds-c-tag--truncated` : undefined,
          isHighlighted ? 'mds-has-focus--spaced' : undefined
        )
      }
      data-tag={tagValue}
      title={title}
      onClick={onTagClick}
    >
      <span className="mds-c-tag__text">{tagValue}</span>
      {children}
    </li>
  )
}

export { MdsTag }
