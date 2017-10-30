import { BaseStorageService } from 'services/storage/base-storage'
import { IStorageService, ISessionStorageKey } from 'services/storage'

export class SessionStorageService extends BaseStorageService<ISessionStorageKey> implements IStorageService<ISessionStorageKey> {
  constructor() {
    super()
    this.storage = sessionStorage
  }
}
