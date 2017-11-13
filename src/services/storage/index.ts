import { IGuid } from 'model'

export interface IStorageService<TKey extends string> {
  get<TValue = string>(key: TKey): TValue | undefined
  remove(key: TKey): void
  set<TValue>(key: TKey, value: TValue): void
}

/**
 * Cookie Storage
 */
export interface ICookieStorage {
}
export type ICookieStorageKey = keyof ICookieStorage

/**
 * Local Storage
 */
export interface ILocalStorage {
  SessionID: IGuid
  UserID: IGuid
}
export type ILocalStorageKey = keyof ILocalStorage

/**
 * Session Storage
 */
export interface ISessionStorage {
}

export type ISessionStorageKey = keyof ISessionStorage

export interface IStorageServices {
  cookie: IStorageService<ICookieStorageKey>
  local: IStorageService<ILocalStorageKey>
  session: IStorageService<ISessionStorageKey>
}
