import { IAppSaga, ISagaGenerator } from 'sagas'
import { takeEvery, put, call } from 'redux-saga/effects'
import { StartSessionAction } from 'actions/session-actions'
import { inject, IWebApiService, DI } from 'dependency-injection'
import { ISessionApplication } from 'model'
import { startSessionSucceededAction, startSessionFailedAction } from '../actions/session-actions'

export class SessionSaga implements IAppSaga {
    @inject(DI.IWebApiService) protected readonly webapi: IWebApiService

    public *run(): ISagaGenerator {
        yield takeEvery<StartSessionAction>('RNA_MESSAGE_SEND', this.startSession.bind(this))
    }

    private *startSession(action: StartSessionAction): ISagaGenerator {
        const { payload } = action
        const sessionApplication: ISessionApplication = {
            MasterName: payload.userName,
            SessionName: payload.sessionName
        }
        
        const request = this.webapi.post('sessions').withBody(sessionApplication).request()
        const response = yield (call(this.webapi.send, request))
        if (response) {
            yield put(startSessionSucceededAction(response.data))
        } else {
            yield put(startSessionFailedAction(action.payload))
        }
    }

}