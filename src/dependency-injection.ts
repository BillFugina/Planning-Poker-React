import { Container, injectable } from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import 'reflect-metadata'
import { IStorageService } from 'services/storage'

export { injectable }

export class DI {
    static ICookieStorageService: symbol = null
    static IHttpService: symbol = null
    static ILocalStorageService: symbol = null
    static ISessionStorageService: symbol = null
    static IStorageServices: symbol = null
    static IToasterService: symbol = null
    static IWebApiService: symbol = null
    static ISanitizerService: symbol = null
    static INotificationService: symbol = null
}

Object.keys(DI).forEach(k => DI[k] = Symbol(k))

// Create the IoC Contaienr
const container = new Container()

// Inversify's constructor injection and standard @inject decorators do not work in React
// because Inversify does not actually create the class. Classes/components should not
// attempt to use constructor injection or import inversify directly. Everything that is
// required for DI in this application is exported from this module below.
const { lazyInject: inject } = getDecorators(container)
export { inject }

// ICookieStorageService
import { ICookieStorageKey } from 'services/storage'
interface ICookieStorageService extends IStorageService<ICookieStorageKey> { }
import { CookieStorageService } from 'services/storage/cookie-storage'
container.bind<ICookieStorageService>(DI.ICookieStorageService).to(CookieStorageService).inSingletonScope()
export { ICookieStorageService }

// ILocalStorageService
import { ILocalStorageKey } from 'services/storage'
interface ILocalStorageService extends IStorageService<ILocalStorageKey> { }
import { LocalStorageService } from 'services/storage/local-storage'
container.bind<ILocalStorageService>(DI.ILocalStorageService).to(LocalStorageService).inSingletonScope()
export { ILocalStorageService }

// ISessionStorageService
import { ISessionStorageKey } from 'services/storage'
interface ISessionStorageService extends IStorageService<ISessionStorageKey> { }
import { SessionStorageService } from 'services/storage/session-storage'
container.bind<ISessionStorageService>(DI.ISessionStorageService).to(SessionStorageService).inSingletonScope()
export { ISessionStorageService }

// IStorageServices
import { IStorageServices } from 'services/storage'
import { StorageServices } from 'services/storage/storage-services'
container.bind<IStorageServices>(DI.IStorageServices).to(StorageServices).inSingletonScope()
export { IStorageServices }

// IToasterService
import { IToasterService } from 'services/toaster'
import { AlertToasterService } from 'services/toaster/alert-toaster-service'
container.bind<IToasterService>(DI.IToasterService).to(AlertToasterService).inSingletonScope()
export { IToasterService }

// IHttpService
import { IHttpService } from 'services/http'
import { AxiosHttpService } from 'services/http/axios'
container.bind<IHttpService>(DI.IHttpService).to(AxiosHttpService).inSingletonScope()
export { IHttpService }

// IWebApiService
import { IWebApiService } from 'services/http'
import { AxiosWebApiService } from 'services/http/axios'
container.bind<IWebApiService>(DI.IWebApiService).to(AxiosWebApiService).inSingletonScope()
export { IWebApiService }

// ISanitizerService
import { ISanitizerService } from 'services/sanitizer'
import { SanitizerService } from 'services/sanitizer/sanitizer-service'
container.bind<ISanitizerService>(DI.ISanitizerService).to(SanitizerService).inSingletonScope()
export { ISanitizerService }

// INotificationService
import { INotificationService } from 'services/notification'
import { NotificationService } from 'services/notification/notification-service'
container.bind<INotificationService>(DI.INotificationService).to(NotificationService).inSingletonScope()
export { INotificationService }
