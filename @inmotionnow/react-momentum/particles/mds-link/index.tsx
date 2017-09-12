import * as React from 'react'
import { ClassNameBuilder } from '../..'

interface IComponentOwnProps extends React.HTMLAttributes<HTMLButtonElement> {
  ariaLabel?: string
  dataOverlayClose?: string
  dataOverlayOpen?: string
  href?: string
  popoutTarget?: string
  size?: 'sm' | 'med' | 'lg'
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsLink: React.StatelessComponent<IComponentProps> = props => {
  const { ariaLabel, children, className, dataOverlayClose, dataOverlayOpen, href, popoutTarget, size, ...buttonProps } = props

  const commonProps = {
    ...ClassNameBuilder(
      'mds-c-link',
      className,
      size ? `mds-c-link--size-${size}` : undefined
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
      type="button"
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

MdsLink.defaultProps = { }

export { MdsLink }
