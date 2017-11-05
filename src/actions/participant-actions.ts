import { ActionFailedPayload, IAppAction } from './index'
import { IParticipant } from 'model'

// ACTION TYPES
export type IParticipantActionTypes =
    | IRegisterParticipantActionTypes
    | IUnregisterParticipantActionTypes

export type IRegisterParticipantActionTypes =
    | 'REGISTER_PARTICIPANT'
    | 'REGISTER_PARTICIPANT_SUCCEEDED'
    | 'REGISTER_PARTICIPANT_FAILED'

export type IUnregisterParticipantActionTypes =
    | 'UNREGISTER_PARTICIPANT'
    | 'UNREGISTER_PARTICIPANT_SUCCEEDED'
    | 'UNREGISTER_PARTICIPANT_FAILED'

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
    participant: IParticipant
}
export type UnregisterParticipantActionSucceededPayload = BaseParticipantActionPayload & {
}
export type UnregisterParticipantActionFailedPayload = ActionFailedPayload & {
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
export function unregisterParticipantAction(participant: IParticipant): UnregisterParticipantAction {
    return { type: 'UNREGISTER_PARTICIPANT', payload: { participant } }
}

export function unregisterParticipantSucceededAction(session: IParticipant): UnregisterParticipantSucceededAction {
    return { type: 'UNREGISTER_PARTICIPANT_SUCCEEDED' }
}

export function unregisterParticipantFailedAction(payload: UnregisterParticipantActionFailedPayload): UnregisterParticipantFailedAction {
    return { type: 'UNREGISTER_PARTICIPANT_FAILED', payload }
}
