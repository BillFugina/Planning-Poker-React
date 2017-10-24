import * as React from 'react'
import './App.css'
import { Navbar, Jumbotron } from 'react-bootstrap'
import { Link } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <Link to="/">Planning Poker</Link>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
        <Jumbotron>
          <h1>Planning Poker</h1>
          <p>Games of planning poker are organized by session name.</p>
          <p>
            All users entering with the same session name will be playing the same game.
            Session names are case sensitive. Start or join a session below.
          </p>
          <p>
            A session should be started on a large-form display visible to all users.
            On the session page, there will be a large QR Code to help players to join the round.
          </p>
        </Jumbotron>
      </div>
    )
  }
}

export default App
