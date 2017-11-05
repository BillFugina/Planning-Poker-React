import { MutedActions } from 'actions/index'
import * as React from 'react'
import { Provider } from 'react-redux'
import { combineReducers } from 'reducers'
import { ParticipantReducer } from 'reducers/participant-reducer'
import { SessionReducer } from 'reducers/session-reducer'
import * as Redux from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import { createLogger as createLoggerMiddleware } from 'redux-logger'
import createSagaMiddleware from 'redux-saga'
import { combineSagas } from 'sagas/index'
import { SessionSaga } from 'sagas/session-saga'
import { IAppState } from 'state'

const reducers = combineReducers(
    {
        Session: SessionReducer,
        Participants: ParticipantReducer
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

const rootSaga = combineSagas(SessionSaga)
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
