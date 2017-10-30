import { IGuid, ISession, Round, IParticipant } from 'model'

export interface IApiService {
    StartSession(sessionName: string, masterName: string): Promise<ISession>
    GetSession(sessionId: IGuid): Promise<ISession>
    CheckSession(sessionId: IGuid): Promise<ISession>
    JoinSession(sessionName: string, participantName: string): Promise<ISession>
    PrepareRound(sessionId: IGuid): Promise<Round>
    EndRound(sessionId: IGuid, roundId: number): Promise<void>
    StartCountdown(sessionId: IGuid, roundId: number): Promise<Round>
    Vote(sessionName: string, roundId: number,  participant: IParticipant, value: number ): Promise<void>
    EndSession(sessionId: IGuid)
    RemoveParticipant(sessionId: IGuid, participantId: IGuid): Promise<void> 
}