import { ActionFailedPayload, IAppAction } from './index'
import { IGuid, ISession } from 'model'
export type ISessionActionTypes =
    | IStartSessionActionTypes
    | IRestoreSessionActionTypes

export type IStartSessionActionTypes =
    | 'START_SESSION'
    | 'START_SESSION_SUCCEEDED'
    | 'START_SESSION_FAILED'

export type IRestoreSessionActionTypes =
    | 'RESTORE_SESSION'
    | 'RESTORE_SESSION_SUCCEEDED'
    | 'RESTORE_SESSION_FAILED'

export type SessionActionPayload = {}
export type StartSessionActionPayload = SessionActionPayload & {
    sessionName: string,
    userName: string
}
export type StartSessionActionSucceededPayload = SessionActionPayload & {
    session: ISession
}

export type StartSessionActionFailedPayload = ActionFailedPayload & {
    
}

export type RestoreSessionActionPayload = SessionActionPayload & {
    sessionID?: IGuid
}
export type RestoreSessionActionSucceededPayload = StartSessionActionSucceededPayload & {
    
}
export type RestoreSessionActionFailedPayload = ActionFailedPayload & {

}

export type SessionAction<Payload extends SessionActionPayload, ActionType extends ISessionActionTypes> = IAppAction<Payload, ActionType>
export type StartSessionAction = SessionAction<StartSessionActionPayload, 'START_SESSION'>
export type StartSessionSucceededAction = SessionAction<StartSessionActionSucceededPayload, 'START_SESSION_SUCCEEDED'>
export type StartSessionFailedAction = SessionAction<StartSessionActionFailedPayload, 'START_SESSION_FAILED'>

export type RestoreSessionAction = SessionAction<RestoreSessionActionPayload, 'RESTORE_SESSION'>
export type RestoreSessionSucceededAction = SessionAction<RestoreSessionActionSucceededPayload, 'RESTORE_SESSION_SUCCEEDED'>
export type RestoreSessionFailedAction = SessionAction<RestoreSessionActionFailedPayload, 'RESTORE_SESSION_FAILED'>

export function startSessionAction(sessionName: string, userName: string): StartSessionAction {
    return { type: 'START_SESSION', payload: { sessionName, userName}}
}

export function startSessionSucceededAction(session: ISession): StartSessionSucceededAction {
    return { type: 'START_SESSION_SUCCEEDED', payload: { session }}
}

export function startSessionFailedAction(payload: StartSessionActionFailedPayload): StartSessionFailedAction {
    return { type: 'START_SESSION_FAILED', payload }
}

export function restoreSessionAction(sessionID?: IGuid): RestoreSessionAction {
    return { type: 'RESTORE_SESSION', payload: { sessionID }}
}

export function restoreSessionSucceededAction(session: ISession): RestoreSessionSucceededAction {
    return { type: 'RESTORE_SESSION_SUCCEEDED', payload: { session }}
}

export function restoreSessionFailedAction(payload: RestoreSessionActionFailedPayload): RestoreSessionFailedAction {
    return { type: 'RESTORE_SESSION_FAILED', payload }
}
