import { ICard, IGuid, IHash, IParticipant, Round } from 'model'

export interface IAppState {
    Session: ISessionState
    Participants: IParticipantState
    
}

export const InitialAppState: Readonly<IAppState> = {
    Session: null,
    Participants: {}
}

export type ISessionState = {
    Id: IGuid
    Name: string
    Master: IParticipant
    AutoReveal: boolean
    Cards: ICard[]
    CurrentRound: Round
    Rounds: Round[]
}

export const EmptySessionState: ISessionState = {
    Id: null,
    Name: '',
    Master: null,
    AutoReveal: false,
    Cards: [],
    CurrentRound: null,
    Rounds: []
}

export type IParticipantState = IHash<IGuid, IParticipant>
