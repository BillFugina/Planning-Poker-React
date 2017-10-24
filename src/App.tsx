import * as React from 'react'
import * as logo from 'images/logo.png'
import 'App.css'
import {
  Grid,
  Header,
  Message,
  Menu,
  Container,
  Image,
} from 'semantic-ui-react'

class App extends React.Component {
  render() {
    return (
      <div>
        <Menu fixed="top" inverted>
          <Container>
            <Menu.Item as="a" header>
              <Image size="mini" src={logo} style={{ marginRight: '1.5em' }} />
              Planning Poker
            </Menu.Item>
          </Container>
        </Menu>
        <Grid container={true} style={{ padding: '5em 0em' }}>
          <Grid.Row>
            <Grid.Column>
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
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>
    )
  }
}

export default App
