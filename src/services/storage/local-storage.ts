import { BaseStorageService } from 'services/storage/base-storage'
import { IStorageService, ILocalStorageKey } from 'services/storage'
import { injectable } from 'dependency-injection'

@injectable()
export class LocalStorageService extends BaseStorageService<ILocalStorageKey> implements IStorageService<ILocalStorageKey> {
  constructor() {
    super()
    this.storage = localStorage
  }
}
