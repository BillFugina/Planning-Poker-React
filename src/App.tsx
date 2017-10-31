import * as React from 'react'
import 'App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Header, Container } from 'semantic-ui-react'
import { HomeRoute } from 'routes/home-route'
import { IWebApiService, DI, inject } from 'dependency-injection'

class App extends React.Component {
  @inject(DI.IWebApiService) private readonly webApiService: IWebApiService

  async componentWillMount() {
    await this.startup()
  }

  // App Startup Code goes here
  private async startup(): Promise<void> {
    const { webApiService } = this
    webApiService.addResponseObserver(
      response => {
        /* TODO */
      }
    )
    return Promise.resolve()
  }

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
