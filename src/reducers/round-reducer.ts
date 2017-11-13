import { IAppActionType } from 'actions'
import { RegisterVoteAction } from 'actions/round-actions'
import { PrepareRoundAction } from 'actions/round-actions'
import { EmptyRound, IVote } from 'model'
import { IRound } from 'model'
import { CreateReducer } from 'reducers'
import { IAppReducerAspect } from 'reducers/aspect-reducer'
import { AspectReducer } from 'reducers/aspect-reducer'
import { InitialAppState, IRoundState } from 'state'
import { EndRoundAction, StartCountdownAction } from '../actions/round-actions'
import { RoundState } from '../model/index'

const RoundAspect: IAppReducerAspect<IRoundState, IAppActionType> = {
    REGISTER_VOTE: (state, action: RegisterVoteAction) => {
        const rounds = state.slice()
        const currentRound = getCurrentRound(rounds)
        addVote(currentRound, action.payload.vote)
        setCurrentRound(rounds, currentRound)
        return rounds
    },
    PREPARE_ROUND: (state, action: PrepareRoundAction) => {
        const rounds = state.slice()
        const round = {...EmptyRound, ...action.payload.round}
        setCurrentRound(rounds, round)
        return rounds
    },
    END_ROUND: (state, action: EndRoundAction) => {
        const rounds = state.slice()
        const currentRound = getCurrentRound(rounds)
        if (currentRound.Id === action.payload.roundID) {
            currentRound.State = RoundState.Complete
        }
        setCurrentRound(rounds, currentRound)
        return rounds
    },
    START_COUNTDOWN: (state, action: StartCountdownAction) => {
        const rounds = state.slice()
        const currentRound = getCurrentRound(rounds)
        if (currentRound.Id !== action.payload.round.Id) {
            throw 'Round mismatch.'
        }
        currentRound.State = RoundState.Started
        setCurrentRound(rounds, currentRound)
        return rounds
    }
}

export const RoundReducer = CreateReducer(
    InitialAppState.Rounds,
    AspectReducer(RoundAspect)
)

function getCurrentRound(rounds: IRound[]): IRound {
    let result = null
    if (rounds && rounds.length > 0) {
        result = {...rounds[0]}
    } else {
        result = {...EmptyRound}
    }
    return result
}

function setCurrentRound(rounds: IRound[], round: IRound) {
    let existingRoundNdx = rounds.findIndex(r => r.Id === round.Id)
    if (existingRoundNdx >= 0) {
        this.Rounds.splice(existingRoundNdx, 1)
    }
    this.Rounds.unshift(round)
}

function addVote(round: IRound, vote: IVote) {
    const existingVoteIndex = this.Votes.findIndex(v => v.Participant.Id === vote.Participant.Id)
    if (existingVoteIndex >= 0) {
        this.Votes.splice(existingVoteIndex, 1)
    }
    if (vote.Value > 0) {
        this.Votes.push(vote)
    }
}
