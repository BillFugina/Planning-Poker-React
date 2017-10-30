
import { Effect } from 'redux-saga'

type IGenerator<TYield = any> = Iterator<TYield>
export type ISagaGenerator = IGenerator<Effect>

export interface IAppSaga {
  run: () => ISagaGenerator
}

interface IAppSagaConstructor {
  new (): IAppSaga
}

export function combineSagas(...sagas: IAppSagaConstructor[]): () => IGenerator<ISagaGenerator[]> {
  return function *() { yield sagas.map(saga => new saga().run()) }
}
