import { IGuid } from 'model'
// Toast levels supported by the application
export type IToastLevel = 'info' | 'success' | 'warning' | 'error'

export interface IToastOptions {
  timeout: number
}

// A toast object
export interface IToast extends IToastOptions {
  ToastUID: IGuid
  level: IToastLevel
  timestamp: number
  message: string
}
