import { ISessionActionTypes, StartSessionSucceededAction } from 'actions/session-actions'
import { ISession } from 'model'
import { CreateReducer } from 'reducers'
import { AspectReducer, IAppReducerAspect } from 'reducers/aspect-reducer'
import { InitialAppState } from 'state'

const SessionAspect: IAppReducerAspect<ISession, ISessionActionTypes> = {
    START_SESSION: (state, action) => {
        return state
    },
    START_SESSION_SUCCEEDED: (state, action: StartSessionSucceededAction) => {
        const newSession = {...state, ...action.payload.session}
        return newSession
    },
    START_SESSION_FAILED: (state, action) => {
        return InitialAppState.Session
    },
    RESTORE_SESSION_SUCCEEDED: (state, action: StartSessionSucceededAction) => {
        const newSession = {...state, ...action.payload.session}
        return newSession
    },
    RESTORE_SESSION_FAILED: (state, action) => {
        return InitialAppState.Session
    }}

export const SessionReducer = CreateReducer(
    InitialAppState.Session,
    AspectReducer(SessionAspect)
)