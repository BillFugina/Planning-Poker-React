import { AspectReducer, IAppReducerAspect } from 'reducers/aspect-reducer'
import { CreateReducer } from 'reducers'
import { IAppActionType } from 'actions'
import { InitialAppState, IParticipantState } from 'state'
import { RegisterParticipantAction, UnregisterParticipantAction } from 'actions/participant-actions'
import { RestoreSessionSucceededAction, StartSessionSucceededAction } from 'actions/session-actions'

const ParticipantAspect: IAppReducerAspect<IParticipantState, IAppActionType> = {
    START_SESSION_SUCCEEDED: (state, action: StartSessionSucceededAction) => {
        var participants = InitialAppState.Participants
        action.payload.session.Participants.forEach(p => {
            participants[p.Id] = p
        })
        return participants
    },
    RESTORE_SESSION_SUCCEEDED: (state, action: RestoreSessionSucceededAction) => {
        var participants = InitialAppState.Participants
        action.payload.session.Participants.forEach(p => {
            participants[p.Id] = p
        })
        return participants
    },
    REGISTER_PARTICIPANT: (state, action: RegisterParticipantAction ) => {
        let participants = { ...{}, ...state}
        var newParticipant = action.payload.participant
        participants[newParticipant.Id] = newParticipant
        return participants
    },

    UNREGISTER_PARTICIPANT: (state, action: UnregisterParticipantAction) => {
        let participants = { ...{}, ...state}
        participants[action.payload.participantID] = undefined
        return participants
    }
}

export const ParticipantReducer = CreateReducer(
    InitialAppState.Participants,
    AspectReducer(ParticipantAspect)
)