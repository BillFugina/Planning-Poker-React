import { INotificationService } from './services/notification/index'
import { NotificationService } from './services/notification/notification-service'
import { Container, injectable } from 'inversify'
import getDecorators from 'inversify-inject-decorators'
import 'reflect-metadata'
import { IWebApiService } from 'services/http'
import { IHttpService } from 'services/http'
import { AxiosWebApiService } from 'services/http/axios'
import { AxiosHttpService } from 'services/http/axios'
import { ISanitizerService } from 'services/sanitizer/index'
import { SanitizerService } from 'services/sanitizer/sanitizer-service'
import { ICookieStorageKey } from 'services/storage'
import { IStorageServices } from 'services/storage'
import { ILocalStorageKey } from 'services/storage'
import { IStorageService } from 'services/storage'
import { ISessionStorageKey } from 'services/storage'
import { CookieStorageService } from 'services/storage/cookie-storage'
import { LocalStorageService } from 'services/storage/local-storage'
import { SessionStorageService } from 'services/storage/session-storage'
import { StorageServices } from 'services/storage/storage-services'
import { IToasterService } from 'services/toaster'
import { AlertToasterService } from 'services/toaster/alert-toaster-service'

export { injectable }

export class DI {
    static ICookieStorageService: symbol = null
    static IHttpService: symbol = null
    static ILocalStorageService: symbol = null
    static ISanitizerService: symbol = null
    static ISessionStorageService: symbol = null
    static IStorageServices: symbol = null
    static IToasterService: symbol = null
    static IWebApiService: symbol = null
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
interface ICookieStorageService extends IStorageService<ICookieStorageKey> { }
container.bind<ICookieStorageService>(DI.ICookieStorageService).to(CookieStorageService).inSingletonScope()
export { ICookieStorageService }

// ILocalStorageService
interface ILocalStorageService extends IStorageService<ILocalStorageKey> { }
container.bind<ILocalStorageService>(DI.ILocalStorageService).to(LocalStorageService).inSingletonScope()
export { ILocalStorageService }

// ISessionStorageService
interface ISessionStorageService extends IStorageService<ISessionStorageKey> { }
container.bind<ISessionStorageService>(DI.ISessionStorageService).to(SessionStorageService).inSingletonScope()
export { ISessionStorageService }

// IStorageServices
container.bind<IStorageServices>(DI.IStorageServices).to(StorageServices).inSingletonScope()
export { IStorageServices }

// IToasterService
container.bind<IToasterService>(DI.IToasterService).to(AlertToasterService).inSingletonScope()
export { IToasterService }

// IHttpService
container.bind<IHttpService>(DI.IHttpService).to(AxiosHttpService).inSingletonScope()
export { IHttpService }

// IWebApiService
container.bind<IWebApiService>(DI.IWebApiService).to(AxiosWebApiService).inSingletonScope()
export { IWebApiService }

// ISanitizerService
container.bind<ISanitizerService>(DI.ISanitizerService).to(SanitizerService).inSingletonScope()
export { ISanitizerService }

// INotificationService
container.bind<INotificationService>(DI.INotificationService).to(NotificationService).inSingletonScope()
export { INotificationService }