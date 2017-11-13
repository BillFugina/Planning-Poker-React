import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { DefaultRoute } from 'routes/default-route'
import { HomeRoute } from 'routes/home-route'
import { IAppState, ISessionState } from 'state'
import { IGuid } from 'model'
import { MasterRoute } from 'routes/master-route'
import { PlanningPoker } from 'components/planning-poker'
import { restoreSessionAction } from 'actions/session-actions'
import { RouteComponentProps } from 'react-router'

interface IComponentRouteParams { }
interface IComponentOwnProps extends RouteComponentProps<IComponentRouteParams> { }

interface IComponentState { }

interface IComponentMapStateProps {
    Session: ISessionState
}

interface IComponentMapDispatchProps {
    restoreSession: (sessionID?: IGuid) => void
}

type IComponentProps =
    & IComponentOwnProps
    & IComponentMapStateProps
    & IComponentMapDispatchProps

type views = 'none' | 'home' | 'master' | 'player'

class MainRouteClass extends React.Component<IComponentProps, IComponentState> {
    constructor(props: IComponentProps, state: IComponentState) {
        super(props, state)
        this.state = {
        }
    }

    static mapStateToProps = (state: IAppState, props: IComponentOwnProps): IComponentMapStateProps => {
        const Session = state.Session || null
        return { Session }
    }

    static mapDispatchToProps = (dispatch: Redux.Dispatch<IAppState>, props: IComponentOwnProps): IComponentMapDispatchProps => {
        return {
            restoreSession: (sessionID?: IGuid) => dispatch(restoreSessionAction(sessionID))
        }
    }

    componentWillMount(): void {
        const { restoreSession } = this.props
        restoreSession()
    }

    static defaultProps: Partial<IComponentProps> = {}

    getView = () => {
        const { Session } = this.props
        const view: views = (!Session)
            ? 'none'
            : Session.Id == null
                ? 'home'
                : 'master'
        switch (view) {
            case 'master':
                return (<MasterRoute />)
            case 'home':
                return (<HomeRoute />)
            default:
                return (<DefaultRoute/>)
        }
    }

    render() {
        const { getView } = this
        return (
            <PlanningPoker>
                {getView()}
            </PlanningPoker>
        )
    }

}

const MainRoute = connect(MainRouteClass.mapStateToProps, MainRouteClass.mapDispatchToProps)(MainRouteClass)

export { MainRoute }
