import { EndSessionAction, RestoreSessionAction, restoreSessionFailedAction, restoreSessionSucceededAction } from '../actions/session-actions'
import { INotificationService } from '../services/notification/index'
import {
    endSessionSucceededAction,
    LeaveSessionAction,
    leaveSessionFailedAction,
    leaveSessionSucceededAction,
    StartSessionAction,
    startSessionFailedAction,
    startSessionSucceededAction
    } from 'actions/session-actions'
import { DI, inject, IStorageServices, IWebApiService } from 'dependency-injection'
import { ISession, ISessionApplication } from 'model'
import { call, put, takeEvery } from 'redux-saga/effects'
import { IAppSaga, ISagaGenerator } from 'sagas'

export class SessionSaga implements IAppSaga {
    @inject(DI.IWebApiService) protected readonly webapi: IWebApiService
    @inject(DI.IStorageServices) private readonly storage: IStorageServices
    @inject(DI.INotificationService) private readonly notificationService: INotificationService

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
            this.saveSessionID(session)
            this.joinSessionNotifications(session.Name)
            yield put(startSessionSucceededAction(session))
        } catch (error) {
            this.clearSessionID()
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
                this.leaveSessionNotifications()
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
                this.leaveSessionNotifications()
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
        if (sessionID) {
            try {
                const request = this.webapi.get('sessions', sessionID).request()
                const response = yield (call(this.webapi.send.bind(this.webapi), request))
                const session: ISession = response.data
                this.saveSessionID(session)
                this.joinSessionNotifications(session.Name)
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

    private saveSessionID(session: ISession) {
        this.storage.local.set('SessionID', session.Id)
    }

    private clearSessionID() {
        this.storage.local.remove('SessionID')
    }

    private joinSessionNotifications(sessionName: string) {
        this.notificationService.joinSession(sessionName)
    }

    private leaveSessionNotifications() {
        this.notificationService.endSession()
    }

}