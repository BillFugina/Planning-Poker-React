import * as Redux from 'redux'
import { IAppState } from 'state'
import { IAppAction } from 'actions'

// Application state reducer function
export interface IAppReducer<TState> {
  (state: Readonly<TState>, action: IAppAction): TState
}

// Helper function to create a reducer function with middleware
export function CreateReducer<TState>(INITIAL_STATE: TState, reducer: IAppReducer<TState>, ...middleware: IAppReducer<TState>[]): IAppReducer<TState> {
  return (state = INITIAL_STATE, action) =>
    action.type === '@@IGNORE'
      ? state
      : action.type === '@@INITIALIZE'
        ? INITIAL_STATE
        : reducer(middleware.reduce((s, m) => m(s, action), state), action)
}

export function combineReducers(reducers: { [P in keyof IAppState]: IAppReducer<IAppState[P]> }): Redux.Reducer<IAppState> {
  return Redux.combineReducers<IAppState>(reducers)
}
