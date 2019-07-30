import React, { Component } from 'react'
import {Navbar, Nav} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSignOutAlt, faSignInAlt, faUserPlus } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';

class Mynavbar extends Component{

  render () {
    return(
      <Navbar className="nav-color navbar-dark" expand="lg">
        <Link to="/">
          <span className="d-inline-block align-top logo"></span>
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
                {/* <Link to="/messages">
                  <FontAwesomeIcon icon={faEnvelope} />Messages
                </Link> */}
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