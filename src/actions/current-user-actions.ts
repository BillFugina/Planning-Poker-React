import { IAppAction } from 'actions'

// ACTION TYPES

export type ICurrentUserActionTypes = 
| ISetCurrentUserActionTypes
export type ISetCurrentUserActionTypes = 
    | 'SET_CURRENT_USER'

/*
/* Payload Area
*/
export type BaseCurrentUserActionPayload = {}

export type SetCurrentUserActionPayload = BaseCurrentUserActionPayload & {
    userID: string
}

/*
/* Actions Area
*/

export type CurrentUserAction<Payload extends BaseCurrentUserActionPayload, ActionType extends ICurrentUserActionTypes> = IAppAction<Payload, ActionType>

export type SetCurrentUserAction = CurrentUserAction<SetCurrentUserActionPayload, 'SET_CURRENT_USER'>

/*
/* Actions Creators Area
*/

export function setCurrentUserAction(userID: string): SetCurrentUserAction {
    return { type: 'SET_CURRENT_USER', payload: { userID }}
}