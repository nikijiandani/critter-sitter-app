import React from 'react'
import logo from './logo.svg';
import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Mynavbar = () => {
  return(
    <Navbar className="nav-color" expand="lg">
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
          <Nav.Link className="message-icon" href="/messages">
            <FontAwesomeIcon icon={faEnvelope} />
          </Nav.Link>               
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default Mynavbar;