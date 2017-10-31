import { CreateReducer } from 'reducers'
import { IAppReducerAspect, AspectReducer } from 'reducers/aspect-reducer'
import { ISessionActionTypes, StartSessionSucceededAction } from 'actions/session-actions'
import { InitialAppState } from 'state'
import { ISession } from 'model'

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
    }
}

export const SessionReducer = CreateReducer(
    InitialAppState.Session,
    AspectReducer(SessionAspect)
)