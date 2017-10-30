import { injectable } from 'dependency-injection'
import { BaseToasterService } from 'services/toaster/base-toaster-service'
import { dispatch } from 'app/store'
import { showToastAction } from 'app/actions/toaster-actions'
import { IToastLevel, IToastOptions } from 'model/toaster'
import { Guid } from '@inmotionnow/utilities'

@injectable()
export class AlertToasterService extends BaseToasterService {
  protected show(level: IToastLevel, message: string, options: Partial<IToastOptions> = {}) {
    dispatch(showToastAction({
      ToastUID: Guid.NewId(),
      level,
      timestamp: Date.now(),
      message,
      ...{ timeout: 5000, ...options }
    }))
  }
}
