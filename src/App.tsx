import * as React from 'react'
import 'App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Container } from 'semantic-ui-react'
import { HomeRoute } from 'routes/home-route'

class App extends React.Component {
  render() {
    return (
      <Router>
        <Container>
          <Route
            exact={true}
            path="/"
            component={HomeRoute}
          />
          <Route
            exact={true}
            path="/hello"
            render={() => (
              <Header as="h1">Hello World</Header>
            )}
          />
        </Container>
      </Router>
    )
  }
}

export default App
