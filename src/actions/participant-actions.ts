import { ActionFailedPayload, IAppAction } from './index'
import { IParticipant } from 'model'

// ACTION TYPES
export type IParticipantActionTypes =
    | IRegisterParticipantActionTypes

export type IRegisterParticipantActionTypes =
    | 'REGISTER_PARTICIPANT'
    | 'REGISTER_PARTICIPANT_SUCCEEDED'
    | 'REGISTER_PARTICIPANT_FAILED'

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

/*
/* Actions Area
*/
export type ParticipantAction<Payload extends BaseParticipantActionPayload, ActionType extends IParticipantActionTypes> = IAppAction<Payload, ActionType>

// Register Participant Actions
export type RegisterParticipantAction = ParticipantAction<RegisterParticipantActionPayload, 'REGISTER_PARTICIPANT'>
export type RegisterParticipantSucceededAction = ParticipantAction<RegisterParticipantActionSucceededPayload, 'REGISTER_PARTICIPANT_SUCCEEDED'>
export type RegisterParticipantFailedAction = ParticipantAction<RegisterParticipantActionFailedPayload, 'REGISTER_PARTICIPANT_FAILED'>

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
