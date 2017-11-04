import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { IAppState } from 'state'
import { ISession } from 'model'
import { HomeRoute } from 'routes/home-route'
import { MasterRoute } from 'routes/master-route'

interface IComponentRouteParams { }
interface IComponentOwnProps extends RouteComponentProps<IComponentRouteParams> { }

interface IComponentState { }

interface IComponentMapStateProps {
    Session: ISession
}

interface IComponentMapDispatchProps { }

type IComponentProps =
    & IComponentOwnProps
    & IComponentMapStateProps
    & IComponentMapDispatchProps

type views = 'home' | 'master' | 'player'

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
        return {}
    }

    static defaultProps: Partial<IComponentProps> = {}

    render() {
        const { Session } = this.props
        const view: views = Session == null
            ? 'home'
            : 'master'
        // const { sessionName, userName} = this.state
        switch (view) {
            case 'master':
                return (<MasterRoute />)
            case 'home':
            default:
                return (<HomeRoute />)
        }
    }

}

const MainRoute = connect(MainRouteClass.mapStateToProps, MainRouteClass.mapDispatchToProps)(MainRouteClass)

export { MainRoute }
