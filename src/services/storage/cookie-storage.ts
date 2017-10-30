import { IStorageService, ICookieStorageKey } from 'services/storage'
import * as cookie from 'js-cookie'
import { injectable } from 'dependency-injection'

@injectable()
export class CookieStorageService implements IStorageService<ICookieStorageKey> {

  get<TValue>(key: ICookieStorageKey): TValue | undefined {
    return cookie.getJSON()[key] as TValue
  }

  remove(key: ICookieStorageKey): void {
    const options  = {
      domain: process.env.COOKIE_DOMAIN,
      expires: Number(process.env.COOKIE_EXPIRES)
    }
    cookie.remove(key, options)
  }

  set<TValue>(key: ICookieStorageKey, value: TValue): void {
    const options  = {
      domain: process.env.COOKIE_DOMAIN,
      expires: Number(process.env.COOKIE_EXPIRES)
    }
    cookie.set(key, value, options)
  }

}
