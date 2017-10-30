
import { injectable } from 'dependency-injection'
import { IToastLevel, IToastOptions } from 'model/toaster'
import { IToasterService, IToasterFunction } from 'services/toaster'

@injectable()
export abstract class BaseToasterService implements IToasterService {

  // Function to show an info toast
  info: IToasterFunction = (message, options) => this.show('info', message, options)

  // Function to show a success toast
  success: IToasterFunction = (message, options) => this.show('success', message, options)

  // Function to show a warning toast
  warning: IToasterFunction = (message, options) => this.show('warning', message, options)

  // Function to show an error toast
  error: IToasterFunction = (message, options) => this.show('error', message, options)

  // This function actually shows the toast
  protected abstract show(level: IToastLevel, message: string, options?: Partial<IToastOptions>)

}
