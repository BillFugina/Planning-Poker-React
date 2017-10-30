import { IStorageService, ICookieStorageKey } from 'services/storage'
import * as cookie from 'js-cookie'
import { Environment } from 'environment'
import { injectable } from 'dependency-injection'

@injectable()
export class CookieStorageService implements IStorageService<ICookieStorageKey> {

  get<TValue>(key: ICookieStorageKey): TValue | undefined {
    return cookie.getJSON()[key] as TValue
  }

  remove(key: ICookieStorageKey): void {
    const { cookies: options } = Environment
    cookie.remove(key, options)
  }

  set<TValue>(key: ICookieStorageKey, value: TValue): void {
    const { cookies: options } = Environment
    cookie.set(key, value, options)
  }

}
