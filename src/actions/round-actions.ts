import { ActionFailedPayload, IAppAction } from 'actions'
import { IRound, IVote } from 'model'

// ACTION TYPES
export type IRoundActionTypes =
    | IRegisterVoteActionTypes
    | IPrepareRoundActionTypes
    | IEndRoundActionTypes

export type IRegisterVoteActionTypes =
    | 'REGISTER_VOTE'
    | 'REGISTER_VOTE_SUCCEEDED'
    | 'REGISTER_VOTE_FAILED'

export type IPrepareRoundActionTypes =
    | 'PREPARE_ROUND'
    | 'PREPARE_ROUND_SUCCEEDED'
    | 'PREPARE_ROUND_FAILED'

export type IEndRoundActionTypes =
    | 'END_ROUND'
    | 'END_ROUND_SUCCEEDED'
    | 'END_ROUND_FAILED'

/*
/* Payload Area
*/
export type BaseRoundActionPayload = {}

// REGISTER_VOTE Payloads
export type RegisterVoteActionPayload = BaseRoundActionPayload & {
    vote: IVote
}
export type RegisterVoteActionSucceededPayload = BaseRoundActionPayload & {
}
export type RegisterVoteActionFailedPayload = ActionFailedPayload & {
}

// PREPARE_ROUND Payloads
export type PrepareRoundActionPayload = BaseRoundActionPayload & {
    round: IRound
}
export type PrepareRoundActionSucceededPayload = BaseRoundActionPayload & {
}
export type PrepareRoundActionFailedPayload = ActionFailedPayload & {
}

// END_ROUND Payloads
export type EndRoundActionPayload = BaseRoundActionPayload & {
    roundID: number
}
export type EndRoundActionSucceededPayload = BaseRoundActionPayload & {
}
export type EndRoundActionFailedPayload = ActionFailedPayload & {
}

/*
/* Actions Area
*/
export type VoteAction<Payload extends BaseRoundActionPayload, ActionType extends IRoundActionTypes> = IAppAction<Payload, ActionType>

// Register Vote Actions
export type RegisterVoteAction = VoteAction<RegisterVoteActionPayload, 'REGISTER_VOTE'>
export type RegisterVoteSucceededAction = VoteAction<RegisterVoteActionSucceededPayload, 'REGISTER_VOTE_SUCCEEDED'>
export type RegisterVoteFailedAction = VoteAction<RegisterVoteActionFailedPayload, 'REGISTER_VOTE_FAILED'>

// Prepare Round Actions
export type PrepareRoundAction = VoteAction<PrepareRoundActionPayload, 'PREPARE_ROUND'>
export type PrepareRoundSucceededAction = VoteAction<PrepareRoundActionSucceededPayload, 'PREPARE_ROUND_SUCCEEDED'>
export type PrepareRoundFailedAction = VoteAction<PrepareRoundActionFailedPayload, 'PREPARE_ROUND_FAILED'>

// End Round Actions
export type EndRoundAction = VoteAction<EndRoundActionPayload, 'END_ROUND'>
export type EndRoundSucceededAction = VoteAction<EndRoundActionSucceededPayload, 'END_ROUND_SUCCEEDED'>
export type EndRoundFailedAction = VoteAction<EndRoundActionFailedPayload, 'END_ROUND_FAILED'>

/*
/* Actions Creators Area
*/

// Register Vote Action Creators
export function registerVoteAction(vote: IVote): RegisterVoteAction {
    return { type: 'REGISTER_VOTE', payload: { vote } }
}

export function registerVoteSucceededAction(): RegisterVoteSucceededAction {
    return { type: 'REGISTER_VOTE_SUCCEEDED' }
}

export function registerVoteFailedAction(payload: RegisterVoteActionFailedPayload): RegisterVoteFailedAction {
    return { type: 'REGISTER_VOTE_FAILED', payload }
}

// Prepare Round Action Creators
export function prepareRoundAction(round: IRound): PrepareRoundAction {
    return { type: 'PREPARE_ROUND', payload: { round } }
}

export function prepareRoundSucceededAction(): PrepareRoundSucceededAction {
    return { type: 'PREPARE_ROUND_SUCCEEDED' }
}

export function prepareRoundFailedAction(payload: PrepareRoundActionFailedPayload): PrepareRoundFailedAction {
    return { type: 'PREPARE_ROUND_FAILED', payload }
}

// End Round Action Creators
export function endRoundAction(roundID: number): EndRoundAction {
    return { type: 'END_ROUND', payload: { roundID } }
}

export function endRoundSucceededAction(): EndRoundSucceededAction {
    return { type: 'END_ROUND_SUCCEEDED' }
}

export function endRoundFailedAction(payload: EndRoundActionFailedPayload): EndRoundFailedAction {
    return { type: 'END_ROUND_FAILED', payload }
}
