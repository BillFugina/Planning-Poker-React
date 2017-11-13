import { call, put, takeEvery } from 'redux-saga/effects'
import { DI, inject, IStorageServices, IWebApiService } from 'dependency-injection'
import { EndSessionAction, RestoreSessionAction, restoreSessionFailedAction, restoreSessionSucceededAction } from '../actions/session-actions'
import {
    endSessionSucceededAction,
    LeaveSessionAction,
    leaveSessionFailedAction,
    leaveSessionSucceededAction,
    StartSessionAction,
    startSessionFailedAction,
    startSessionSucceededAction
    } from 'actions/session-actions'
import { IAppSaga, ISagaGenerator } from 'sagas'
import { ISession, ISessionApplication, IGuid } from 'model'
import { setCurrentUserAction } from 'actions/current-user-actions'

export class SessionSaga implements IAppSaga {
    @inject(DI.IWebApiService) protected readonly webapi: IWebApiService
    @inject(DI.IStorageServices) private readonly storage: IStorageServices

    public *run(): ISagaGenerator {
        yield takeEvery<StartSessionAction>('START_SESSION', this.startSession.bind(this))
        yield takeEvery<RestoreSessionAction>('RESTORE_SESSION', this.restoreSession.bind(this))
        yield takeEvery<EndSessionAction>('END_SESSION', this.endSession.bind(this))
        yield takeEvery<LeaveSessionAction>('LEAVE_SESSION', this.leaveSession.bind(this))
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
            const session: ISession = response.data
            const currentUserID = session.Master.Id
            this.saveSessionID(session)
            this.saveUserID(currentUserID)
            yield put(startSessionSucceededAction(session))
            yield put(setCurrentUserAction(currentUserID))
        } catch (error) {
            this.clearSessionID()
            this.clearUserID()
            yield put(startSessionFailedAction({ error }))
        }
    }

    private *endSession(action: LeaveSessionAction): ISagaGenerator {
        const { payload } = action
        try {
            const request = this.webapi.delete('sessions', payload.sessionID).request()
            const response = yield (call(this.webapi.send.bind(this.webapi), request))
            if (response && response.status === 200) {
                this.clearSessionID()
                this.clearUserID()
                yield put(endSessionSucceededAction())
            } else {
                yield put(startSessionFailedAction({ error: response}))
            }
        } catch (error) {
            yield put(startSessionFailedAction({ error }))
        }
    }

    private *leaveSession(action: LeaveSessionAction): ISagaGenerator {
        const { payload } = action
        try {
            const request = this.webapi.delete('sessions', payload.sessionID, 'participants', payload.participantID).request()
            const response = yield (call(this.webapi.send.bind(this.webapi), request))
            if (response && response.status === 200) {
                this.clearSessionID()
                this.clearUserID()
                yield put(leaveSessionSucceededAction())
            } else {
                yield put(leaveSessionFailedAction({ error: response}))
            }
        } catch (error) {
            yield put(leaveSessionFailedAction({ error }))
        }
    }

    private *restoreSession(action: RestoreSessionAction): ISagaGenerator {
        const { payload } = action
        const sessionID = payload.sessionID || this.storage.local.get('SessionID')
        const currentUserID = payload.userID || this.storage.local.get('UserID')
        if (sessionID && currentUserID) {
            try {
                const request = this.webapi.get('sessions', sessionID).request()
                const response = yield (call(this.webapi.send.bind(this.webapi), request))
                const session: ISession = response.data
                this.saveSessionID(session)
                this.saveUserID(currentUserID)
                yield put(restoreSessionSucceededAction(session))
            } catch (error) {
                this.clearSessionID()
                this.clearUserID()
                yield put(restoreSessionFailedAction({ error }))
                }
        } else {
            this.clearSessionID()
            this.clearUserID()
            yield put(restoreSessionFailedAction({ error: 'no session id' }))
        }
    }

    private saveSessionID(session: ISession) {
        this.storage.local.set('SessionID', session.Id)
    }

    private clearSessionID() {
        this.storage.local.remove('SessionID')
    }

    private saveUserID(userID: IGuid) {
        this.storage.local.set('UserID', userID)
    }

    private clearUserID() {
        this.storage.local.remove('UserID')
    }
}