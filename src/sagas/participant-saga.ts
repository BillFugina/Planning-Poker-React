import { IAppSaga, ISagaGenerator } from 'sagas'
import { inject, DI, IWebApiService } from 'dependency-injection'
import { RemoveParticipantAction } from 'actions/participant-actions'
import { takeEvery, call, put } from 'redux-saga/effects'
import { removeParticipantFailedAction, removeParticipantSucceededAction } from 'actions/participant-actions'
export class ParticipantSaga implements IAppSaga {
    @inject(DI.IWebApiService) protected readonly webapi: IWebApiService
    
    public *run(): ISagaGenerator {
        yield takeEvery<RemoveParticipantAction>('REMOVE_PARTICIPANT', this.removeParticipant.bind(this))
    }

    private *removeParticipant(action: RemoveParticipantAction): ISagaGenerator {
        const { payload } = action
        const { participant, sessionID } = payload
        try {
            const request = this.webapi.delete('sessions', sessionID, 'participants', participant.Id).request()
            const response = yield (call(this.webapi.send.bind(this.webapi), request))
            if (response && response.status === 200) {
                yield put(removeParticipantSucceededAction())
            } else {
                yield put(removeParticipantFailedAction({error: response}))
            }
        } catch (error) {
            yield put(removeParticipantFailedAction({error}))
        }
    }
}