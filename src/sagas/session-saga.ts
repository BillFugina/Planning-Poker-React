import { RestoreSessionAction, restoreSessionFailedAction, restoreSessionSucceededAction } from '../actions/session-actions'
import { StartSessionAction, startSessionFailedAction, startSessionSucceededAction } from 'actions/session-actions'
import { DI, inject, IStorageServices, IWebApiService } from 'dependency-injection'
import { ISession, ISessionApplication } from 'model'
import { call, put, takeEvery } from 'redux-saga/effects'
import { IAppSaga, ISagaGenerator } from 'sagas'

export class SessionSaga implements IAppSaga {
    @inject(DI.IWebApiService) protected readonly webapi: IWebApiService
    @inject(DI.IStorageServices) private readonly storage: IStorageServices

    public *run(): ISagaGenerator {
        yield takeEvery<StartSessionAction>('START_SESSION', this.startSession.bind(this))
        yield takeEvery<RestoreSessionAction>('RESTORE_SESSION', this.restoreSession.bind(this))
    }

    private *startSession(action: StartSessionAction): ISagaGenerator {
        const { payload } = action
        const sessionApplication: ISessionApplication = {
            MasterName: payload.userName,
            SessionName: payload.sessionName
        }
        try {
            const request = this.webapi.post('sessions').withBody(sessionApplication).request()
            const response = yield (call(this.webapi.send.bind(this.webapi), request))
            const { data: session } = response
            this.saveSessionID(session)
            yield put(startSessionSucceededAction(session))
        } catch (error) {
            this.clearSessionID()
            yield put(startSessionFailedAction({ error }))
        }
    }

    private saveSessionID(session: ISession) {
        this.storage.local.set('SessionID', session.Id)
    }

    private clearSessionID() {
        this.storage.local.remove('SessionID')
    }

    private *restoreSession(action: RestoreSessionAction): ISagaGenerator {
        const { payload } = action
        const sessionID = payload.sessionID || this.storage.local.get('SessionID')
        if (sessionID) {
            try {
                const request = this.webapi.get('sessions', sessionID).request()
                const response = yield (call(this.webapi.send.bind(this.webapi), request))
                const { data: session } = response
                this.saveSessionID(session)
                yield put(restoreSessionSucceededAction(session))
            } catch (error) {
                this.clearSessionID()
                yield put(startSessionFailedAction({ error }))
                }
        } else {
            this.clearSessionID()
            yield put(restoreSessionFailedAction({ error: 'no session id' }))
        }
    }

}