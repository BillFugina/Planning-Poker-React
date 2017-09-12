import * as React from 'react'
import { ClassNameBuilder } from '../..'

interface IMdsCheckRadioProps {
  appearance?: 'checkbox' | 'chircle' | 'radio' | 'switch'
  label?: string
  size?: 'lg'
  theme?: 'danger'
  layout?: 'row' | 'row-reverse'
}

interface IMdsCheckRadioProtectedProps {
  onClick: (event: React.MouseEvent<HTMLLabelElement>) => void
}

const MdsCheckRadio: React.StatelessComponent<IMdsCheckRadioProps & IMdsCheckRadioProtectedProps> = props => {

  const { appearance, label, layout, size, theme, onClick, children } = props

  return (
    <label
      {
        ... {
          onClick,
          ...ClassNameBuilder(
            'mds-c-checkradio',
            layout ? `mds-c-checkradio--layout-${layout}` : undefined,
            size ? `mds-c-checkradio--size-${size}` : undefined,
            theme ? `mds-c-checkradio--theme-${theme}` : undefined
          )
        }
      }
    >
      {children}
      <div className={`mds-c-checkradio__${appearance}`} />
      <div className="mds-c-checkradio__label">{label}</div>
    </label>
  )

}

MdsCheckRadio.defaultProps = {
  appearance: 'checkbox'
}

export { MdsCheckRadio, IMdsCheckRadioProps }
