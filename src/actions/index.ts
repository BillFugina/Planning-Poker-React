import * as Redux from 'redux'
import { ISessionActionTypes } from 'actions/session-actions'
import { ISystemActionTypes } from 'actions/system-actions'
import { IToasterActionTypes } from './toaster-actions'

export type IAppActionType =
    | ISystemActionTypes
    | ISessionActionTypes
    | IToasterActionTypes

export interface IAppAction<TPayload = any, TActionType extends IAppActionType = IAppActionType> extends Redux.Action {
    type: TActionType
    payload?: TPayload
}

export const MutedActions: string[] = []
