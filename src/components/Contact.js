import React from 'react';
import {Form, Button} from 'react-bootstrap'
import './styles/contact.css'

function Contact() {
  return (
    <Form className="contact">
      <Form.Group controlId="formBasicMessage">
        <Form.Label>Send a message to Blueberry:</Form.Label>
        <Form.Control as="textarea" placeholder="Enter message" />
      </Form.Group>
      <Button variant="primary" type="submit" className="myBtn" block>
        Send
      </Button>
    </Form>
  )
}

export default Contact;