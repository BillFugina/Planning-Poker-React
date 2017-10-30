import { IAppAction } from 'actions'

export type ISystemActionTypes =
  | '@@INITIALIZE'
  | '@@IGNORE'

export function initializeStateAction(): IAppAction {
  return { type: '@@INITIALIZE' }
}

export function ignoreAction(): IAppAction {
  return { type: '@@IGNORE' }
}
