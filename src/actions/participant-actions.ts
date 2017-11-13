import { ActionFailedPayload, IAppAction } from 'actions'
import { IParticipant, IGuid } from 'model'

// ACTION TYPES
export type IParticipantActionTypes =
    | IRegisterParticipantActionTypes
    | IUnregisterParticipantActionTypes
    | IRemoveParticipantActionTypes

export type IRegisterParticipantActionTypes =
    | 'REGISTER_PARTICIPANT'
    | 'REGISTER_PARTICIPANT_SUCCEEDED'
    | 'REGISTER_PARTICIPANT_FAILED'

export type IUnregisterParticipantActionTypes =
    | 'UNREGISTER_PARTICIPANT'
    | 'UNREGISTER_PARTICIPANT_SUCCEEDED'
    | 'UNREGISTER_PARTICIPANT_FAILED'

export type IRemoveParticipantActionTypes =
    | 'REMOVE_PARTICIPANT'
    | 'REMOVE_PARTICIPANT_SUCCEEDED'
    | 'REMOVE_PARTICIPANT_FAILED'

/*
/* Payload Area
*/
export type BaseParticipantActionPayload = {}

// REGISTER_PARTICIPANT Payloads
export type RegisterParticipantActionPayload = BaseParticipantActionPayload & {
    participant: IParticipant
}
export type RegisterParticipantActionSucceededPayload = BaseParticipantActionPayload & {
}
export type RegisterParticipantActionFailedPayload = ActionFailedPayload & {
}

// UNREGISTER_PARTICIPANT Payloads
export type UnregisterParticipantActionPayload = BaseParticipantActionPayload & {
    participantID: IGuid
}
export type UnregisterParticipantActionSucceededPayload = BaseParticipantActionPayload & {
}
export type UnregisterParticipantActionFailedPayload = ActionFailedPayload & {
}

// REMOVE_PARTICIPANT Payloads
export type RemoveParticipantActionPayload = BaseParticipantActionPayload & {
    sessionID: IGuid
    participant: IParticipant
}
export type RemoveParticipantActionSucceededPayload = BaseParticipantActionPayload & {
}
export type RemoveParticipantActionFailedPayload = ActionFailedPayload & {
}

/*
/* Actions Area
*/
export type ParticipantAction<Payload extends BaseParticipantActionPayload, ActionType extends IParticipantActionTypes> = IAppAction<Payload, ActionType>

// Register Participant Actions
export type RegisterParticipantAction = ParticipantAction<RegisterParticipantActionPayload, 'REGISTER_PARTICIPANT'>
export type RegisterParticipantSucceededAction = ParticipantAction<RegisterParticipantActionSucceededPayload, 'REGISTER_PARTICIPANT_SUCCEEDED'>
export type RegisterParticipantFailedAction = ParticipantAction<RegisterParticipantActionFailedPayload, 'REGISTER_PARTICIPANT_FAILED'>

// Unregister Participant Actions
export type UnregisterParticipantAction = ParticipantAction<UnregisterParticipantActionPayload, 'UNREGISTER_PARTICIPANT'>
export type UnregisterParticipantSucceededAction = ParticipantAction<UnregisterParticipantActionSucceededPayload, 'UNREGISTER_PARTICIPANT_SUCCEEDED'>
export type UnregisterParticipantFailedAction = ParticipantAction<UnregisterParticipantActionFailedPayload, 'UNREGISTER_PARTICIPANT_FAILED'>

// Remove Participant Actions
export type RemoveParticipantAction = ParticipantAction<RemoveParticipantActionPayload, 'REMOVE_PARTICIPANT'>
export type RemoveParticipantSucceededAction = ParticipantAction<RemoveParticipantActionSucceededPayload, 'REMOVE_PARTICIPANT_SUCCEEDED'>
export type RemoveParticipantFailedAction = ParticipantAction<RemoveParticipantActionFailedPayload, 'REMOVE_PARTICIPANT_FAILED'>

/*
/* Actions Creators Area
*/

// Register Participant Action Creators
export function registerParticipantAction(participant: IParticipant): RegisterParticipantAction {
    return { type: 'REGISTER_PARTICIPANT', payload: { participant } }
}

export function registerParticipantSucceededAction(session: IParticipant): RegisterParticipantSucceededAction {
    return { type: 'REGISTER_PARTICIPANT_SUCCEEDED' }
}

export function registerParticipantFailedAction(payload: RegisterParticipantActionFailedPayload): RegisterParticipantFailedAction {
    return { type: 'REGISTER_PARTICIPANT_FAILED', payload }
}

// Unregister Participant Action Creators
export function unregisterParticipantAction(participantID: IGuid): UnregisterParticipantAction {
    return { type: 'UNREGISTER_PARTICIPANT', payload: { participantID } }
}

export function unregisterParticipantSucceededAction(session: IParticipant): UnregisterParticipantSucceededAction {
    return { type: 'UNREGISTER_PARTICIPANT_SUCCEEDED' }
}

export function unregisterParticipantFailedAction(payload: UnregisterParticipantActionFailedPayload): UnregisterParticipantFailedAction {
    return { type: 'UNREGISTER_PARTICIPANT_FAILED', payload }
}

// Remove Participant Action Creators
export function removeParticipantAction(sessionID: IGuid, participant: IParticipant): RemoveParticipantAction {
    return { type: 'REMOVE_PARTICIPANT', payload: { sessionID, participant } }
}

export function removeParticipantSucceededAction(): RemoveParticipantSucceededAction {
    return { type: 'REMOVE_PARTICIPANT_SUCCEEDED' }
}

export function removeParticipantFailedAction(payload: RemoveParticipantActionFailedPayload): RemoveParticipantFailedAction {
    return { type: 'REMOVE_PARTICIPANT_FAILED', payload }
}
