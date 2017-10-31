import { IEnvironment } from 'model/environment'
export const Environment: IEnvironment = {
    name: 'production',
    clientUrl: 'http://localhost:9000',
    api : {
        url: 'http://planningpoker-api.azurewebsites.net',
        routePrefix: 'api'
    },
    cookies: {
        domain: 'dogspots.com',
        expires: 365
    }
}
