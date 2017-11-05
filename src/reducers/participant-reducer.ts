import { IAppActionType } from 'actions'
import { RegisterParticipantAction } from 'actions/participant-actions'
import { RestoreSessionSucceededAction, StartSessionSucceededAction } from 'actions/session-actions'
import { CreateReducer } from 'reducers'
import { AspectReducer, IAppReducerAspect } from 'reducers/aspect-reducer'
import { InitialAppState, IParticipantState } from 'state'
import { UnregisterParticipantAction } from '../actions/participant-actions'

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
        var targetParticipant = action.payload.participant
        participants[targetParticipant.Id] = undefined
        return participants
    }
}

export const ParticipantReducer = CreateReducer(
    InitialAppState.Participants,
    AspectReducer(ParticipantAspect)
)