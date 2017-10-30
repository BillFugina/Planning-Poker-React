import { DI, injectable, inject, ICookieStorageService, ILocalStorageService, ISessionStorageService, IStorageServices } from 'dependency-injection'

@injectable()
export class StorageServices implements IStorageServices {

  @inject(DI.ICookieStorageService) public readonly cookie: ICookieStorageService
  @inject(DI.ILocalStorageService) public readonly local: ILocalStorageService
  @inject(DI.ISessionStorageService) public readonly session: ISessionStorageService

}
