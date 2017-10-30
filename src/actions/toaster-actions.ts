import { IAppAction } from 'actions'
import { IToast } from 'model/toaster'
import { IGuid } from 'model'

export type IToasterActionTypes =
  | 'SHOW_TOAST'
  | 'HIDE_TOAST'

export type IShowToastAction = IAppAction<IToast, 'SHOW_TOAST'>

export function showToastAction(toast: IToast): IShowToastAction {
  return { type: 'SHOW_TOAST', payload: toast }
}

export type IHideToastAction = IAppAction<IGuid, 'HIDE_TOAST'>

export function hideToastAction(toastUID: IGuid): IHideToastAction {
  return { type: 'HIDE_TOAST', payload: toastUID }
}
