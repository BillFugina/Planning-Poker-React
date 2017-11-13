import * as React from 'react'
import * as Redux from 'redux'
import createSagaMiddleware from 'redux-saga'
import { combineReducers } from 'reducers'
import { combineSagas } from 'sagas/index'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger as createLoggerMiddleware } from 'redux-logger'
import { CurrentUserReducer } from 'reducers/current-user-reducer'
import { IAppState } from 'state'
import { MutedActions } from 'actions/index'
import { ParticipantReducer } from 'reducers/participant-reducer'
import { ParticipantSaga } from 'sagas/participant-saga'
import { Provider } from 'react-redux'
import { RoundReducer } from 'reducers/round-reducer'
import { SessionReducer } from 'reducers/session-reducer'
import { SessionSaga } from 'sagas/session-saga'

const reducers = combineReducers(
    {
        Session: SessionReducer,
        Participants: ParticipantReducer,
        Rounds: RoundReducer,
        CurrentUser: CurrentUserReducer
    }
)

// Set up middleware
const loggerMiddleware = createLoggerMiddleware({
    collapsed: true,
    predicate: (getState, action: Redux.Action) => MutedActions.indexOf(action.type) < 0
})
const sagaMiddleware = createSagaMiddleware()
const middleware = Redux.applyMiddleware(loggerMiddleware, sagaMiddleware)

// Set up Store enhancer (this is what enables Redux DevTools)
const composeEnhancers = composeWithDevTools({
    name: 'PlanningPoker',
    actionsBlacklist: MutedActions
})

const store = Redux.createStore<IAppState>(reducers, composeEnhancers(middleware))

const rootSaga = combineSagas(SessionSaga, ParticipantSaga)
sagaMiddleware.run(rootSaga)

interface IStoreProps { }

const StoreProvider: React.StatelessComponent<Readonly<IStoreProps>> = props => {
    const { children } = props
    return (
        <Provider {...{ store }}>
            {children}
        </Provider>
    )
}

// Since we are exporting the store as a component, also export the dispatch function
const { dispatch } = store
export { StoreProvider, dispatch }
