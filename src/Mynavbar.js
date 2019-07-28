import React, { Component } from 'react'
import logo from './logo.png';
import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope, faSignOutAlt, faSignInAlt, faUserPlus, faUser } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Mynavbar extends Component{

  render () {
    return(
      <Navbar className="nav-color" expand="lg">
        <Link to="/">
          <img
          src={logo}
          width="130"
          height="50"
          className="d-inline-block align-top"
          alt="logo"
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
          <Nav className="nav-components">
            { localStorage.getItem('loggedInUsersEmail') ? (
              <>
                Logged in as: {localStorage.getItem('loggedInUsersEmail')}
                <Link to="/" onClick={this.props.handleLogout}>
                  <FontAwesomeIcon icon={faSignOutAlt} />Logout
                </Link>
                <Link to="/messages">
                  <FontAwesomeIcon icon={faEnvelope} />Messages
                </Link>
              </> ) : (
              <>
                <Link to="/signup">
                  <FontAwesomeIcon icon={faUserPlus} />Signup
                </Link>
                <Link to="/login">
                  <FontAwesomeIcon icon={faSignInAlt} />Login
                </Link>
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