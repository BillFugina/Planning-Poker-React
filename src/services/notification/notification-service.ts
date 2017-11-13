import * as pusher from 'pusher-js'
import { DI, inject, injectable } from 'dependency-injection'
import { dispatch } from 'store'
import { endRoundAction, startCountdownAction } from 'actions/round-actions'
import { endSessionAction } from 'actions/session-actions'
import { Environment } from 'environment'
import { IGuid, IParticipant, IRound, IVote } from 'model'
import { INotificationService } from 'services/notification'
import { ISanitizerService } from 'services/sanitizer/index'
import { prepareRoundAction, registerVoteAction } from 'actions/round-actions'
import { registerParticipantAction } from 'actions/participant-actions'
import { unregisterParticipantAction } from 'actions/participant-actions'

@injectable()
export class NotificationService implements INotificationService {
    private _pusher: pusher.Pusher
    private _channel: pusher.Channel

    @inject(DI.ISanitizerService) public readonly _sanitizerService: ISanitizerService

    constructor() {
        this._pusher = new pusher(Environment.pusher.apiKey)
    }
    
    joinSession(sessionName: string) {
        if (this._channel) {
            throw ('Cannot join more than one session')
        }

        this._channel = this._pusher.subscribe(this._sanitizerService.LettersAndDigits(sessionName))
        this._channel.bind('RegisterVote', this.registerVote)
        this._channel.bind('RegisterParticipant', this.registerParticipant)
        this._channel.bind('RemoveParticipant', this.removeParticipant)
        this._channel.bind('PrepareRound', this.prepareRound)
        this._channel.bind('StartCountdown', this.startCountdown)
        this._channel.bind('EndRound', this.endRound)
        this._channel.bind('EndSession', this.endSession)
        this.resetParticipantVotes()
    }

    // TODO: Complete these funcitons

    endSession = () => {
        this.leaveSession()
        dispatch(endSessionAction())
    }

    leaveSession() {
        this._channel.unbind_all()
        this._pusher.unsubscribe(this._channel.name)
        this._channel = null
    }

    registerVote = (vote: IVote) => {
        dispatch(registerVoteAction(vote))
    }

    registerParticipant = (participant: IParticipant) => {
        dispatch(registerParticipantAction(participant))
    }

    removeParticipant = (participantId: IGuid) => {
        dispatch(unregisterParticipantAction(participantId))
    }

    prepareRound = (round: IRound) => {
        dispatch(prepareRoundAction(round))
    }
    
    endRound = (roundId: number) => {
        dispatch(endRoundAction(roundId))
    }

    startCountdown = (round: IRound) => {
        dispatch(startCountdownAction(round))
    }

    resetParticipantVotes = () => {
        /* TODO */
    }
}