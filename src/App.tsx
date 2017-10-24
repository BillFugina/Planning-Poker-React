import * as React from 'react'
import './App.css'
import { Grid, Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap'
import { Containerless } from 'components'

class App extends React.Component {
  render() {
    return (
      <Containerless>
        <Navbar>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">React-Bootstrap</a>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="#">Link</NavItem>
            <NavItem eventKey={2} href="#">Link</NavItem>
            <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
              <MenuItem eventKey={3.1}>Action</MenuItem>
              <MenuItem eventKey={3.2}>Another action</MenuItem>
              <MenuItem eventKey={3.3}>Something else here</MenuItem>
              <MenuItem divider={true} />
              <MenuItem eventKey={3.4}>Separated link</MenuItem>
            </NavDropdown>
          </Nav>
        </Navbar>
        <Grid>
          <div />
        </Grid>
      </Containerless>
    )
  }
}

export default App
