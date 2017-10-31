import { ISession } from 'model'

export interface IAppState {
    Session: ISession
}

export const InitialAppState: Readonly<IAppState> = {
    Session: null
}