import * as cookie from 'js-cookie'

export interface IEnvironment {
    name: 'development' | 'test' | 'production',
    clientUrl: string
    api: {
        url: string,
        routePrefix: string
    },
    cookies: cookie.CookieAttributes
   
}