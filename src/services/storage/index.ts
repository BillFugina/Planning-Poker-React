import { IQueryStringParams } from 'model/query-string'

export interface IStorageService<TKey extends string> {
  get<TValue = string>(key: TKey): TValue | undefined
  remove(key: TKey): void
  set<TValue>(key: TKey, value: TValue): void
}

/**
 * Cookie Storage
 */
export interface ICookieStorage {
  AuthN
}
export type ICookieStorageKey = keyof ICookieStorage

/**
 * Local Storage
 */
export interface ILocalStorage {
  AuthZ
  QueryString: IQueryStringParams
}
export type ILocalStorageKey = keyof ILocalStorage

/**
 * Session Storage
 */
export interface ISessionStorage {
  SessionGUID: IGuid
  QueryString: IQueryStringParams
}

export type ISessionStorageKey = keyof ISessionStorage

export interface IStorageServices {
  cookie: IStorageService<ICookieStorageKey>
  local: IStorageService<ILocalStorageKey>
  session: IStorageService<ISessionStorageKey>
}
