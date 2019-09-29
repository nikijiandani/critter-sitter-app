import React from "react";
import { Form, Button } from "react-bootstrap";
import "./styles/login.css";
import { Redirect } from "react-router-dom";

export default function Login({ currentUser, handleLogin }) {
  if (!currentUser) {
    return (
      <Form className="login-form" onSubmit={handleLogin}>
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
    );
  } else {
    return <Redirect to="/" />;
  }
}
