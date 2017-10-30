import { IToastLevel, IToastOptions } from 'model/toaster'

// Generic function signature for toaster functions
export interface IToasterFunction {
  (message: string, options?: Partial<IToastOptions>): void
}

// Toaster service interface
export type IToasterService = { [L in IToastLevel]: IToasterFunction }
