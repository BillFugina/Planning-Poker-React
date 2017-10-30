import { IAppAction } from './index'
export type ISessionActionTypes =
    IStartSessionActionTypes

export type IStartSessionActionTypes =
    | 'START_SESSION'
    | 'START_SESSION_SUCCEEDED'
    | 'START_SESSION_FAILED'

export type StartSessionActionPayload = {
    sessionName: string,
    userName: string
}

export type StartSessionAction = IAppAction<StartSessionActionPayload, IStartSessionActionTypes>

export function startSessionAction(sessionName: string, userName: string): StartSessionAction {
    return { type: 'START_SESSION', payload: { sessionName, userName}}
}