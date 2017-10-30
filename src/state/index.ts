export type SessionState = {
    SessionID: number
}

export interface IAppState {
    Session: SessionState
}

export const InitialAppState: Readonly<IAppState> = {
    Session: {
        SessionID: undefined
    }
}