import * as React from 'react'
import * as Redux from 'redux'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import { IAppState } from 'state'
import { ISession } from 'model'
import { Container, Segment } from 'semantic-ui-react'

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

class MasterRouteClass extends React.Component<IComponentProps, IComponentState> {
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
        return (
            <Container>
                <Segment size="massive">
                    {Session.Name}
                </Segment>
            </Container>
        )
    }

}

const MasterRoute = connect(MasterRouteClass.mapStateToProps, MasterRouteClass.mapDispatchToProps)(MasterRouteClass)

export { MasterRoute }
