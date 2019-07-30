import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';
import './styles/login.css';
import { Redirect } from 'react-router-dom'


class Login extends Component {

  render() {
    if(!this.props.currentUser) {
      return (
          <Form className="login-form" onSubmit={this.props.handleLogin}>
            <h3>Login</h3>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Username</Form.Label>
              <Form.Control type="text" placeholder="Enter name" required />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" required />
            </Form.Group>
            <Button variant="info" type="submit" className="loginBtn" block>
              Login
            </Button>
          </Form>
      )
    } else {
      return (<Redirect to='/' />)
    }
  }
}

export default Login;