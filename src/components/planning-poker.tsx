import * as pusher from 'pusher-js'
import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { DI, inject } from 'dependency-injection'
import { IAppState } from 'state'
import { IGuid, IVote, IParticipant, IRound } from 'model'
import { ISanitizerService } from 'services/sanitizer'
import { RouteComponentProps } from 'react-router'
import { Environment } from 'environment'
import { endSessionAction } from 'actions/session-actions'
import {
  registerVoteAction,
  prepareRoundAction,
  endRoundAction,
  startCountdownAction
} from 'actions/round-actions'
import {
  registerParticipantAction,
  unregisterParticipantAction
} from 'actions/participant-actions'
import { Containerless } from 'components'

interface IComponentRouteParams {}
interface IComponentOwnProps
  extends RouteComponentProps<IComponentRouteParams> {}

interface IComponentState {}

interface IComponentMapStateProps {
  sessionName: string
}

interface IComponentMapDispatchProps {
  endSession: () => void
  leaveSession: () => void
  registerVote: (vote: IVote) => void
  registerParticipant: (participant: IParticipant) => void
  removeParticipant: (participantId: IGuid) => void
  prepareRound: (round: IRound) => void
  endRound: (roundId: number) => void
  startCountdown: (round: IRound) => void
  resetParticipantVotes: () => void
}

type IComponentProps = IComponentOwnProps &
  IComponentMapStateProps &
  IComponentMapDispatchProps

class PlanningPokerClass extends React.Component<
  IComponentProps,
  IComponentState
> {
  static defaultProps: Partial<IComponentProps> = {}
  private _pusher: pusher.Pusher
  private _channel: pusher.Channel

  @inject(DI.ISanitizerService)
  public readonly _sanitizerService: ISanitizerService

  constructor(props: IComponentProps, context: any) {
    super(props, context)
    this._pusher = new pusher(Environment.pusher.apiKey)
  }

  static mapStateToProps = (state: IAppState, props: IComponentOwnProps): IComponentMapStateProps => {
    const { Session } = state
    const sessionName = Session ? Session.Name : ''
    return { sessionName }
  }

  static mapDispatchToProps = (dispatch: Redux.Dispatch<IAppState>, props: IComponentOwnProps): IComponentMapDispatchProps => {
    return {
      endSession: PlanningPokerClass.endSession(dispatch),
      leaveSession: PlanningPoker.leaveSession(dispatch),
      registerVote: PlanningPoker.registerVote(dispatch),
      registerParticipant: PlanningPoker.registerParticipant(dispatch),
      removeParticipant: PlanningPoker.removeParticipant(dispatch),
      prepareRound: PlanningPoker.prepareRound(dispatch),
      endRound: PlanningPoker.endRound(dispatch),
      startCountdown: PlanningPoker.startCountdown(dispatch),
      resetParticipantVotes: PlanningPoker.resetParticipantVotes(dispatch)
    }
  }

  componentWillReceiveProps(nextProps: IComponentProps): void {
    const { sessionName } = this.props
    const { joinSession, endSession} = this
    if (nextProps.sessionName !== '' ) {
      if (sessionName !== '') {
        endSession()
      }
      joinSession(sessionName)
    } else if (sessionName !== '') {
      endSession()
    }
  }

  render() {
    const { children } = this.props
    return <Containerless>{children}</Containerless>
  }

  joinSession = (sessionName: string) => {
    if (this._channel) {
      throw 'Cannot join more than one session'
    }

    this._channel = this._pusher.subscribe(
      this._sanitizerService.LettersAndDigits(sessionName)
    )
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

  static endSession = (dispatch: Redux.Dispatch<IAppState>) => () => {
    dispatch(endSessionAction())
  }

  endSession = () => {
    const { endSession } = this.props
    endSession()
    this._channel && this._channel.unbind_all()
    this._pusher && this._pusher.unsubscribe(this._channel.name)
    this._channel = undefined
    this._pusher = undefined
  }

  static leaveSession = (dispatch: Redux.Dispatch<IAppState>) => () => {
    /* TODO */
  }

  leaveSession = () => {
    /* TODO */
  }

  static registerVote = (dispatch: Redux.Dispatch<IAppState>) => (
    vote: IVote
  ) => {
    dispatch(registerVoteAction(vote))
  }

  registerVote = (vote: IVote) => {
    const { registerVote } = this.props
    registerVote(vote)
  }

  static registerParticipant = (dispatch: Redux.Dispatch<IAppState>) => (
    participant: IParticipant
  ) => {
    dispatch(registerParticipantAction(participant))
  }

  registerParticipant = (participant: IParticipant) => {
    const { registerParticipant } = this.props
    registerParticipant(participant)
  }

  static removeParticipant = (dispatch: Redux.Dispatch<IAppState>) => (
    participantId: IGuid
  ) => {
    dispatch(unregisterParticipantAction(participantId))
  }

  removeParticipant = (participantId: IGuid) => {
    const { removeParticipant } = this.props
    removeParticipant(participantId)
  }

  static prepareRound = (dispatch: Redux.Dispatch<IAppState>) => (
    round: IRound
  ) => {
    dispatch(prepareRoundAction(round))
  }

  prepareRound = (round: IRound) => {
    const { prepareRound } = this.props
    prepareRound(round)
  }

  static endRound = (dispatch: Redux.Dispatch<IAppState>) => (
    roundId: number
  ) => {
    dispatch(endRoundAction(roundId))
  }

  endRound = (roundId: number) => {
    const { endRound } = this.props
    endRound(roundId)
  }

  static startCountdown = (dispatch: Redux.Dispatch<IAppState>) => (
    round: IRound
  ) => {
    dispatch(startCountdownAction(round))
  }

  startCountdown = (round: IRound) => {
    const { startCountdown } = this.props
    startCountdown(round)
  }

  static resetParticipantVotes = (
    dispatch: Redux.Dispatch<IAppState>
  ) => () => {
    /* TODO */
  }

  resetParticipantVotes = () => {
    const { resetParticipantVotes } = this.props
    resetParticipantVotes()
  }
}

const PlanningPoker = connect(
  PlanningPokerClass.mapStateToProps,
  PlanningPokerClass.mapDispatchToProps
)(PlanningPokerClass)

export { PlanningPoker }
