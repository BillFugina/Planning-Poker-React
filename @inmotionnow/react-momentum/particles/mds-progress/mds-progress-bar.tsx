/**
 * MdsProgressBar
 */

import * as React from 'react'
import { IProgressTheme, ProgressValue } from './'

interface IComponentOwnProps {
  theme: IProgressTheme
  percent: number
}

type IComponentProps = Readonly<IComponentOwnProps>

const MdsProgressBar: React.StatelessComponent<IComponentProps> = props => {
  const { theme, percent } = props
  const progress = ProgressValue(percent)
  const width = `${progress}%`
  return (
    <div className="mds-c-progress">
      <div
        className={`mds-c-progress__status mds-c-progress__status--theme-${theme}`}
        role="progressbar"
        aria-valuenow={percent}
        aria-valuemin="0"
        aria-valuemax="100"
        style={{width}}
      >
        {width}
      </div>
    </div>
  )
}

MdsProgressBar.defaultProps = {
  theme: 'info',
  percent: 0
}

export { MdsProgressBar }
