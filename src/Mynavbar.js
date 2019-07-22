import React from 'react'
import logo from './logo.svg';
import {Navbar, Nav} from 'react-bootstrap'

const Mynavbar = () => {
  return(
    <Navbar bg="light" expand="lg">
      <Navbar.Brand href="/">
        <img
        src={logo}
        width="30"
        height="30"
        className="d-inline-block align-top"
        alt="logo"
        />
        {' critterSitter'}
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
        <Nav>
          <Nav.Link href="/signup">Signup</Nav.Link>
          <Nav.Link href="/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Mynavbar;