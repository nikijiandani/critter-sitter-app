import React, { Component } from 'react'
import logo from './logo.svg';
import {Navbar, Nav, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Mynavbar extends Component{

  render () {
    return(
      <Navbar className="nav-color" expand="lg">
        <Link to="/">
          <img
          src={logo}
          width="30"
          height="30"
          className="d-inline-block align-top"
          alt="logo"
          />
          {' critterSitter'}
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav>
            { localStorage.getItem('loggedInUsersEmail') ? (
              <>
                <Navbar.Text>
                  Logged in as:{localStorage.getItem('loggedInUsersEmail')}
                </Navbar.Text>
                <Button onClick={this.props.handleLogout}>Logout</Button>
                <Link className="message-icon" to="/messages">
                  <FontAwesomeIcon icon={faEnvelope} />
                </Link>
              </> ) : (
              <>
                <Link to="/signup">Signup</Link>
                <Link to="/login">Login</Link>
              </>
              )
            }
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default Mynavbar;