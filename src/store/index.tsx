import * as React from 'react'
import * as Redux from 'redux'
import { Provider } from 'react-redux'
import { IAppState } from 'state'
import { composeWithDevTools } from 'redux-devtools-extension'
import { MutedActions } from 'actions/index'
import { combineReducers } from 'reducers'
import { SessionReducer } from 'reducers/session-reducer'
import createSagaMiddleware from 'redux-saga'
import { createLogger as createLoggerMiddleware } from 'redux-logger'

const reducers = combineReducers(
    {
        Session: SessionReducer
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
