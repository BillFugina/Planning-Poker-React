import { INotificationService } from './index'
import { DI, inject, injectable } from 'dependency-injection'
import { Environment } from 'environment'
import { IGuid, IParticipant, IRound, IVote } from 'model'
import * as pusher from 'pusher-js'
import { ISanitizerService } from 'services/sanitizer/index'

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

    endSession() {
        this._channel.unbind_all()
        this._pusher.unsubscribe(this._channel.name)
        this._channel = null
    }

    registerVote = (data: IVote) => {
        /* TODO */
    }

    registerParticipant = (data: IParticipant) => {
        /* TODO */
    }

    removeParticipant = (participantId: IGuid) => {
        /* TODO */
    }

    prepareRound = (data: IRound) => {
        /* TODO */
    }
    
    endRound = (roundId: number) => {
        /* TODO */
    }

    startCountdown = (data: IRound) => {
        /* TODO */
    }

    resetParticipantVotes = () => {
        /* TODO */
    }
}