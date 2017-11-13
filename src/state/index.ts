import { ICard, IGuid, IHash, IParticipant, IRound } from 'model'

export interface IAppState {
    Session: ISessionState
    Participants: IParticipantState
    Rounds: IRoundState
    CurrentUser: ICurrentUserState
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

export const EmptyCurrentUser: ICurrentUserState = ''

export const InitialAppState: Readonly<IAppState> = {
    CurrentUser: null,
    Session: null,
    Participants: {},
    Rounds: []
}

export type IParticipantState = IHash<IGuid, IParticipant>

export type IRoundState= IRound[]

export type ICurrentUserState = string