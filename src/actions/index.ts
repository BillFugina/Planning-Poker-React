import { IParticipantActionTypes } from 'actions/participant-actions'
import { IRoundActionTypes } from 'actions/round-actions'
import { ISessionActionTypes } from 'actions/session-actions'
import { ISystemActionTypes } from 'actions/system-actions'
import { IToasterActionTypes } from 'actions/toaster-actions'
import * as Redux from 'redux'

export type IAppActionType =
    | ISystemActionTypes
    | ISessionActionTypes
    | IToasterActionTypes
    | IParticipantActionTypes
    | IRoundActionTypes

export interface IAppAction<TPayload = any, TActionType extends IAppActionType = IAppActionType> extends Redux.Action {
    type: TActionType
    payload?: TPayload
}

export const MutedActions: string[] = []

export type ActionFailedPayload = {
    error: any
}