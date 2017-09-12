import * as React from 'react'
import { ClassNameBuilder } from '../..'

type TMdsButtonAppearance = 'bordered' | 'bordered-muted' | 'flat' | 'flat-muted' | 'white' | 'white-muted' | 'flat-white'
type TMdsButtonSize = 'sm' | 'med' | 'lg' | 'xl'
type TMdsButtonTheme = 'info' | 'success' | 'warning' | 'danger'
export type TMdsButtonType = 'button' | 'submit' | 'reset'

interface IComponentOwnProps extends React.HTMLAttributes<HTMLButtonElement> {
  appearance?: TMdsButtonAppearance // mds-c-button--appearance-*
  ariaLabel?: string
  block?: boolean // mds-c-button--block
  className?: string
  dataOverlayClose?: string
  dataOverlayOpen?: string
  disabled?: boolean
  href?: string
  id?: string
  onClick?: React.MouseEventHandler<HTMLButtonElement>
  popoutTarget?: string
  size?: TMdsButtonSize // mds-c-button--*
  theme?: TMdsButtonTheme // mds-c-button--theme-*
  type?: TMdsButtonType
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsButton: React.StatelessComponent<IComponentProps> = props => {
  const { ariaLabel, appearance, block, children, className, dataOverlayClose,
    dataOverlayOpen, href, popoutTarget, size, theme, type,
    ...buttonProps } = props

  const commonProps = {
    ...ClassNameBuilder(
      'mds-c-button',
      appearance ? `mds-c-button--appearance-${appearance}` : undefined,
      block ? 'mds-c-button--block' : undefined,
      className,
      size ? `mds-c-button--size-${size}` : undefined,
      theme ? `mds-c-button--theme-${theme}` : undefined
    ),
    'aria-label': ariaLabel ? ariaLabel : undefined,
    'data-overlay-close': dataOverlayClose ? dataOverlayClose : undefined,
    'data-overlay-open': dataOverlayOpen ? dataOverlayOpen : undefined,
    'data-popout-target': popoutTarget ? popoutTarget : undefined
  }

  const button = (
    <button
      {...buttonProps}
      {...commonProps}
      type={type}
    >
      {children}
    </button>
  )

  const anchor = (
    <a
      {...commonProps}
      href={href}
    >
      {children}
    </a>
  )

  return href ? anchor : button
}

MdsButton.defaultProps = {
  type: 'button'
}

export { MdsButton }
