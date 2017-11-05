import { ParticipantRole } from '../model/index'
import { IParticipant } from 'model'
import * as React from 'react'
import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router'
import * as Redux from 'redux'
import {
    Button,
    Container,
    Divider,
    Header,
    Icon,
    Segment,
    Table
    } from 'semantic-ui-react'
import { IAppState } from 'state'

interface IComponentRouteParams { }
interface IComponentOwnProps extends RouteComponentProps<IComponentRouteParams> { }

interface IComponentState { }

interface IComponentMapStateProps {
    Name: string,
    Master: IParticipant
    Voters: IParticipant[]
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
        const { Name, Master, Participants } = Session
        const Voters = Participants.filter(p => p.Role === ParticipantRole.Voter)
        return { Name, Master, Voters }
    }

    static mapDispatchToProps = (dispatch: Redux.Dispatch<IAppState>, props: IComponentOwnProps): IComponentMapDispatchProps => {
        return {}
    }

    static defaultProps: Partial<IComponentProps> = {}

    render() {
        const { Name, Master, Voters } = this.props
        return (
            <Container>
                <Segment size="huge">
                    {Name}
                </Segment>
                <Segment padded={false} size="mini">
                    <Button color="blue" size="mini" compact><Icon name="add" />New Round</Button>
                    <Button color="blue" size="mini" compact><Icon name="clock" />Start Timer</Button>
                    <Button.Group size="mini">
                        <Button color="blue" size="mini" compact><Icon name="eye" />Reveal</Button>
                        <Button toggle color="blue" size="mini" compact icon="lock" />
                    </Button.Group>
                    <Button color="red" size="mini" compact floated="right"><Icon name="stop" />End Session</Button>
                </Segment>
                <Segment.Group horizontal>
                    <Segment>
                        <Header as="h3">Paticipants</Header>
                        <Divider />
                        <Table basic="very">
                            <Table.Body>
                                <Table.Row>
                                    <Table.Cell collapsing={true}>
                                        <Icon name="legal" />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {Master.Name}
                                    </Table.Cell>
                                    <Table.Cell collapsing={true}>
                                        <Icon fitted name="x" color="red" link />
                                    </Table.Cell>
                                </Table.Row>
                                {Voters.map(voter => (
                                    <Table.Row>
                                    <Table.Cell collapsing={true}>
                                        <Icon name="legal" />
                                    </Table.Cell>
                                    <Table.Cell>
                                        {voter.Name}
                                    </Table.Cell>
                                    <Table.Cell collapsing={true}>
                                        <Icon fitted name="x" color="red" link />
                                    </Table.Cell>
                                </Table.Row>
                                ))}
                            </Table.Body>
                        </Table>
                    </Segment>
                    <Segment>
                        <Header as="h3">Current Round</Header>
                        <Divider />
                    </Segment>
                    <Segment>
                        <Header as="h3">Rounds</Header>
                        <Divider />
                    </Segment>
                </Segment.Group>
            </Container>
        )
    }

}

const MasterRoute = connect(MasterRouteClass.mapStateToProps, MasterRouteClass.mapDispatchToProps)(MasterRouteClass)

export { MasterRoute }
