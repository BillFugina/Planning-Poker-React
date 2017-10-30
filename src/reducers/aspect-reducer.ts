import { IAppActionType, IAppAction } from 'actions'
import { IAppReducer } from 'reducers'

export type IAppReducerAspect<TState, TActionType extends string = IAppActionType> = Partial<{
  [T in TActionType]: IAppReducer<TState>
}>

function AspectReduce<TState>(aspect: IAppReducerAspect<TState>, state: TState, action: IAppAction): TState {
  const target = (aspect || {})[action.type]
  return target ? target(state, action) : state
}

export function AspectReducer<TState>(aspect: IAppReducerAspect<TState>): IAppReducer<TState> {
  return (state, action) => AspectReduce(aspect, state, action)
}
