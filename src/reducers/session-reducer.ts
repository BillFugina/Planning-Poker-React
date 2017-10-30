import { CreateReducer } from 'reducers'
import { IAppReducerAspect, AspectReducer } from 'reducers/aspect-reducer'
import { ISessionActionTypes } from '../actions/session-actions'
import { SessionState } from 'state'
import { InitialAppState } from '../state/index'

const SessionAspect: IAppReducerAspect<SessionState, ISessionActionTypes> = {
    START_SESSION: (state, action) => {
        return state
    },
    START_SESSION_SUCCEEDED: (state, action) => {
        return state
    },
    START_SESSION_FAILED: (state, action) => {
        return state
    }
}

export const SessionReducer = CreateReducer(
    InitialAppState.Session,
    AspectReducer(SessionAspect)
)