import { ISessionActionTypes, StartSessionSucceededAction } from 'actions/session-actions'
import { CreateReducer } from 'reducers'
import { AspectReducer, IAppReducerAspect } from 'reducers/aspect-reducer'
import { InitialAppState, ISessionState } from 'state'
import { EmptySessionState } from '../state/index'

const SessionAspect: IAppReducerAspect<ISessionState, ISessionActionTypes> = {
    START_SESSION: (state, action) => {
        return state
    },
    START_SESSION_SUCCEEDED: (state, action: StartSessionSucceededAction) => {
        const { Participants,  ...payloadSession} = action.payload.session
        const newSession = {...state, ...payloadSession}
        return newSession
    },
    START_SESSION_FAILED: (state, action) => {
        return InitialAppState.Session
    },
    RESTORE_SESSION_SUCCEEDED: (state, action: StartSessionSucceededAction) => {
        const { Participants,  ...payloadSession} = action.payload.session
        const newSession = {...state, ...payloadSession}
        return newSession
    },
    RESTORE_SESSION_FAILED: (state, action) => {
        return EmptySessionState
    }}

export const SessionReducer = CreateReducer(
    InitialAppState.Session,
    AspectReducer(SessionAspect)
)