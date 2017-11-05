import { ActionFailedPayload, IAppAction } from './index'
import { IGuid, ISession } from 'model'

// ACTION TYPES
export type ISessionActionTypes =
    | IStartSessionActionTypes
    | IRestoreSessionActionTypes
    | IEndSessionActionTypes
    | ILeaveSessionActionTypes

export type IStartSessionActionTypes =
    | 'START_SESSION'
    | 'START_SESSION_SUCCEEDED'
    | 'START_SESSION_FAILED'

export type IRestoreSessionActionTypes =
    | 'RESTORE_SESSION'
    | 'RESTORE_SESSION_SUCCEEDED'
    | 'RESTORE_SESSION_FAILED'

export type IEndSessionActionTypes =
    | 'END_SESSION'
    | 'END_SESSION_SUCCEEDED'
    | 'END_SESSION_FAILED'

export type ILeaveSessionActionTypes =
    | 'LEAVE_SESSION'
    | 'LEAVE_SESSION_SUCCEEDED'
    | 'LEAVE_SESSION_FAILED'

/*
/* Payload Area
*/
export type BaseSessionActionPayload = {}

// START_SESSION Payloads
export type StartSessionActionPayload = BaseSessionActionPayload & {
    sessionName: string,
    userName: string
}
export type StartSessionActionSucceededPayload = BaseSessionActionPayload & {
    session: ISession
}
export type StartSessionActionFailedPayload = ActionFailedPayload & {
}

// RESTORE_SESSION Payloads
export type RestoreSessionActionPayload = BaseSessionActionPayload & {
    sessionID?: IGuid
}
export type RestoreSessionActionSucceededPayload = BaseSessionActionPayload & {
    session: ISession
}
export type RestoreSessionActionFailedPayload = ActionFailedPayload & {
}

// END_SESSION Payloads
export type EndSessionActionPayload = BaseSessionActionPayload & {
    sessionID: IGuid
}
export type EndSessionActionSucceededPayload = BaseSessionActionPayload & {
}
export type EndSessionActionFailedPayload = ActionFailedPayload & {
}

// LEAVE_SESSION Payloads
export type LeaveSessionActionPayload = BaseSessionActionPayload & {
    sessionID: IGuid,
    participantID: IGuid
}
export type LeaveSessionActionSucceededPayload = BaseSessionActionPayload & {
}
export type LeaveSessionActionFailedPayload = ActionFailedPayload & {
}

/*
/* Actions Area
*/
export type SessionAction<Payload extends BaseSessionActionPayload, ActionType extends ISessionActionTypes> = IAppAction<Payload, ActionType>

// Start Session Actions
export type StartSessionAction = SessionAction<StartSessionActionPayload, 'START_SESSION'>
export type StartSessionSucceededAction = SessionAction<StartSessionActionSucceededPayload, 'START_SESSION_SUCCEEDED'>
export type StartSessionFailedAction = SessionAction<StartSessionActionFailedPayload, 'START_SESSION_FAILED'>

// Restore Session Actions
export type RestoreSessionAction = SessionAction<RestoreSessionActionPayload, 'RESTORE_SESSION'>
export type RestoreSessionSucceededAction = SessionAction<RestoreSessionActionSucceededPayload, 'RESTORE_SESSION_SUCCEEDED'>
export type RestoreSessionFailedAction = SessionAction<RestoreSessionActionFailedPayload, 'RESTORE_SESSION_FAILED'>

// End Session Actions
export type EndSessionAction = SessionAction<EndSessionActionPayload, 'END_SESSION'>
export type EndSessionSucceededAction = SessionAction<EndSessionActionSucceededPayload, 'END_SESSION_SUCCEEDED'>
export type EndSessionFailedAction = SessionAction<EndSessionActionFailedPayload, 'END_SESSION_FAILED'>

// Leave Session Actions
export type LeaveSessionAction = SessionAction<LeaveSessionActionPayload, 'LEAVE_SESSION'>
export type LeaveSessionSucceededAction = SessionAction<LeaveSessionActionSucceededPayload, 'LEAVE_SESSION_SUCCEEDED'>
export type LeaveSessionFailedAction = SessionAction<LeaveSessionActionFailedPayload, 'LEAVE_SESSION_FAILED'>

/*
/* Actions Creators Area
 */

// Start Session Action Creators
export function startSessionAction(sessionName: string, userName: string): StartSessionAction {
    return { type: 'START_SESSION', payload: { sessionName, userName } }
}

export function startSessionSucceededAction(session: ISession): StartSessionSucceededAction {
    return { type: 'START_SESSION_SUCCEEDED', payload: { session } }
}

export function startSessionFailedAction(payload: StartSessionActionFailedPayload): StartSessionFailedAction {
    return { type: 'START_SESSION_FAILED', payload }
}

// Restore Session Action Creators
export function restoreSessionAction(sessionID?: IGuid): RestoreSessionAction {
    return { type: 'RESTORE_SESSION', payload: { sessionID } }
}

export function restoreSessionSucceededAction(session: ISession): RestoreSessionSucceededAction {
    return { type: 'RESTORE_SESSION_SUCCEEDED', payload: { session } }
}

export function restoreSessionFailedAction(payload: RestoreSessionActionFailedPayload): RestoreSessionFailedAction {
    return { type: 'RESTORE_SESSION_FAILED', payload }
}

// End Session Action Creators
export function endSessionAction(sessionID?: IGuid): EndSessionAction {
    return { type: 'END_SESSION', payload: { sessionID } }
}

export function endSessionSucceededAction(): EndSessionSucceededAction {
    return { type: 'END_SESSION_SUCCEEDED' }
}

export function endSessionFailedAction(payload: EndSessionActionFailedPayload): EndSessionFailedAction {
    return { type: 'END_SESSION_FAILED', payload }
}

// Leave Session Action Creators
export function leaveSessionAction(sessionID: IGuid, participantID: IGuid): LeaveSessionAction {
    return { type: 'LEAVE_SESSION', payload: { sessionID, participantID } }
}

export function leaveSessionSucceededAction(): LeaveSessionSucceededAction {
    return { type: 'LEAVE_SESSION_SUCCEEDED' }
}

export function leaveSessionFailedAction(payload: LeaveSessionActionFailedPayload): LeaveSessionFailedAction {
    return { type: 'LEAVE_SESSION_FAILED', payload }
}
