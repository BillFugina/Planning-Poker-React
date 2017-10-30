import { IAppAction } from './index'
import { ISession } from 'model'
export type ISessionActionTypes =
    IStartSessionActionTypes

export type IStartSessionActionTypes =
    | 'START_SESSION'
    | 'START_SESSION_SUCCEEDED'
    | 'START_SESSION_FAILED'

export type SessionActionPayload = {}
export type StartSessionActionPayload = SessionActionPayload & {
    sessionName: string,
    userName: string
}
export type StartSessionSucceededActionPayload = SessionActionPayload & {
    session: ISession
}

export type SessionAction<Payload extends SessionActionPayload, ActionType extends ISessionActionTypes> = IAppAction<Payload, ActionType>
export type StartSessionAction = SessionAction<StartSessionActionPayload, 'START_SESSION'>
export type StartSessionSucceededAction = SessionAction<StartSessionSucceededActionPayload, 'START_SESSION_SUCCEEDED'>
export type StartSessionFailedAction = SessionAction<StartSessionActionPayload, 'START_SESSION_FAILED'>

export function startSessionAction(sessionName: string, userName: string): StartSessionAction {
    return { type: 'START_SESSION', payload: { sessionName, userName}}
}

export function startSessionSucceededAction(session: ISession): StartSessionSucceededAction {
    return { type: 'START_SESSION_SUCCEEDED', payload: { session }}
}

export function startSessionFailedAction(payload: StartSessionActionPayload): StartSessionFailedAction {
    return { type: 'START_SESSION_FAILED', payload }
}
