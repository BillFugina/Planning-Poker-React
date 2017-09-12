/**
 * MdsProgressStatus
 */

import * as React from 'react'
import { IProgressTheme, ProgressValue } from './index'

interface IComponentOwnProps {
  theme?: IProgressTheme
  percent?: number
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsProgressCircle: React.StatelessComponent<IComponentProps> = props => {
  const { theme, percent, children } = props
  const progress = ProgressValue(percent)
  return (
    <div
      className={`mds-c-progress-circle mds-c-progress-circle--theme-${theme}`}
      data-percentage={progress}
      aria-valuenow={progress}
      aria-valuemin="0"
      aria-valuemax="100"
    >
      <svg {...{ className: 'mds-c-progress-circle__svg', viewport: '0 0 2000 2000' }}>
        <circle {...{ className: 'mds-c-progress-circle__stroke', r: '50%', cx: '50%', cy: '50%' }} />
        <circle {...{ className: 'mds-c-progress-circle__stroke', r: '50%', cx: '50%', cy: '50%' }} />
      </svg>
      {children}
    </div>
  )
}

MdsProgressCircle.defaultProps = {
  theme: 'info',
  percent: 0
}

export { MdsProgressCircle }
