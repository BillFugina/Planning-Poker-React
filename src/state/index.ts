import { ICard, IGuid, IHash, IParticipant, IRound } from 'model'

export interface IAppState {
    Session: ISessionState
    Participants: IParticipantState
    Rounds: IRoundState
}

export const InitialAppState: Readonly<IAppState> = {
    Session: null,
    Participants: {},
    Rounds: []
}

export type ISessionState = {
    Id: IGuid
    Name: string
    Master: IParticipant
    AutoReveal: boolean
    Cards: ICard[]
}

export const EmptySessionState: ISessionState = {
    Id: null,
    Name: '',
    Master: null,
    AutoReveal: false,
    Cards: []
}

export type IParticipantState = IHash<IGuid, IParticipant>

export type IRoundState= IRound[]