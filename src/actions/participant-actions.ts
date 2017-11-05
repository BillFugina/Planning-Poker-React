import { ActionFailedPayload, IAppAction } from './index'
import { IParticipant } from 'model'

// ACTION TYPES
export type IParticipantActionTypes =
    | IAddParticipantActionTypes

export type IAddParticipantActionTypes =
    | 'ADD_PARTICIPANT'
    | 'ADD_PARTICIPANT_SUCCEEDED'
    | 'ADD_PARTICIPANT_FAILED'

/*
/* Payload Area
*/
export type BaseParticipantActionPayload = {}

// ADD_PARTICIPANT Payloads
export type AddParticipantActionPayload = BaseParticipantActionPayload & {
    participant: IParticipant
}
export type AddParticipantActionSucceededPayload = BaseParticipantActionPayload & {
}
export type AddParticipantActionFailedPayload = ActionFailedPayload & {
}

/*
/* Actions Area
*/
export type ParticipantAction<Payload extends BaseParticipantActionPayload, ActionType extends IParticipantActionTypes> = IAppAction<Payload, ActionType>

// Add Participant Actions
export type AddParticipantAction = ParticipantAction<AddParticipantActionPayload, 'ADD_PARTICIPANT'>
export type AddParticipantSucceededAction = ParticipantAction<AddParticipantActionSucceededPayload, 'ADD_PARTICIPANT_SUCCEEDED'>
export type AddParticipantFailedAction = ParticipantAction<AddParticipantActionFailedPayload, 'ADD_PARTICIPANT_FAILED'>

/*
/* Actions Creators Area
*/

// Add Participant Action Creators
export function addParticipantAction(participant: IParticipant): AddParticipantAction {
    return { type: 'ADD_PARTICIPANT', payload: { participant } }
}

export function addParticipantSucceededAction(session: IParticipant): AddParticipantSucceededAction {
    return { type: 'ADD_PARTICIPANT_SUCCEEDED' }
}

export function addParticipantFailedAction(payload: AddParticipantActionFailedPayload): AddParticipantFailedAction {
    return { type: 'ADD_PARTICIPANT_FAILED', payload }
}
