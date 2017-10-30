import * as React from 'react'
import { Container, Message, Header, Input, Divider, Button, InputOnChangeData, ButtonProps } from 'semantic-ui-react'

interface IComponentOwnProps { }

type IComponentProps = IComponentOwnProps

interface IComponentState {
    sessionName: string
    userName: string
}

class HomeRouteClass extends React.Component<IComponentProps, IComponentState> {
    constructor(props: IComponentProps, state: IComponentState) {
        super(props, state)
        this.state = {
            sessionName: '',
            userName: ''
        }
    }

    static defaultProps: Partial<IComponentProps> = {}

    handleNameChange = (event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) => {
        const { userName, ...rest } = this.state
        if (userName !== data.value) {
            this.setState({ userName: data.Value, ...rest })
        }
    }

    handleSessionChange = (event: React.SyntheticEvent<HTMLInputElement>, data: InputOnChangeData) => {
        const { sessionName, ...rest } = this.state
        if (sessionName !== data.value) {
            this.setState({ sessionName: data.Value, ...rest })
        }
    }

    handleNewSessionClick = (event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) => {
        /* TODO */
    }
    handleJoinSessionClick = (event: React.MouseEvent<HTMLButtonElement>, data: ButtonProps) => {
        /* TODO */
    }

    render() {
        const { handleJoinSessionClick, handleNameChange, handleNewSessionClick, handleSessionChange } = this
        // const { sessionName, userName} = this.state
        return (
            <Container>
                <Message>
                    <Header as="h1">Planning Poker</Header>
                    <p>Games of planning poker are organized by session name.</p>
                    <p>
                        All users entering with the same session name will be playing the same game.
                        Session names are case sensitive. Start or join a session below.
                    </p>
                    <p>
                        A session should be started on a large-form display visible to all users.
                        On the session page, there will be a large QR Code to help players to join the round.
                    </p>
                </Message>
                <Header as="h2">Session Name</Header>
                <Input fluid={true} placeholder="Session" onChange={handleSessionChange} />
                <Divider hidden />
                <Header as="h2">Your Name</Header>
                <Input fluid={true} placeholder="Name" onChange={handleNameChange} />
                <Divider hidden />
                <div>
                    <Button primary onClick={handleNewSessionClick}>Start New Session</Button>
                    <Button primary onClick={handleJoinSessionClick}>Join Existing Session</Button>
                </div>
            </Container>
        )
    }

}

const HomeRoute = HomeRouteClass

export { HomeRoute }
