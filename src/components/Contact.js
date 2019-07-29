import React, { Component } from 'react';
import './styles/contact.css';
import Messages from './Messages';
import {Form, Button} from 'react-bootstrap';

class Contact extends Component {

  constructor() {
    super()
    this.state = {
      profiles: {
        sitter_pet_types: [],
        images: [],
        reviews: [],
        lookup_id: 0
      },
      messages: []
    }
  }

  getProfiles = (pid) => {
    fetch('http://localhost:8080/api/users?id=' + pid)
    .then(results => {
      results.json().then((res) => {
        this.setState({
          profiles: res[0], // individual profile is first result
          lookup_id: pid
        });
      })
    })

  };

  getMessages = () => {
    const currentUserId = localStorage.getItem('loggedInUsersId')
    console.log("Getting Messages")
    fetch(`http://localhost:8080/api/messages?user_id=${currentUserId}`)
    .then(results => {
      results.json().then((res) => {
        console.log(res)
        this.setState({
          messages: res
        });
      })
    })

  };

  handleSubmit = (e) => {
    e.preventDefault();

    let newMessage = {
      from_id: localStorage.getItem('loggedInUsersId'),
      to_id: this.props.match.params.id,
      content: e.target.elements[0].value
    }
    console.log(e.target.elements[0].value)
    e.target.elements[0].value = ""
    fetch('http://localhost:8080/api/messages', {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newMessage)
    })
    .then(res => res.json())
    .then((response) => {
      console.log("Refetching messages")
      this.getMessages() // refetch messages
      console.log("Success:", JSON.stringify(response))
    })
    .catch(error => console.log('Error:', error))
  }

  componentDidMount() {

    let lookupProfileID = this.props.match.params.id ? this.props.match.params.id : 0;
    this.getProfiles(lookupProfileID)
    this.getMessages()
  }

  render(){
    return (
      <div className="msg-container">
        <div className="msg-heading">
          <div className="msg-title">
            <h4>Messages</h4>
          </div>
          <div className="chat-header">
            <img src={this.state.profiles.avatar} alt="avatar" className="chat-avatar" /> 
            <p className="title">
              {this.state.profiles.first_name} {this.state.profiles.last_name}
            </p> 
          </div>
        </div>
        <div className="msg-block">
          <div className="chat-box">          
            <Messages 
            msgs={this.state.messages} 
            currentProfile={this.state.profiles.user_id}
            />
          </div>
          <Form className="contact" onSubmit={this.handleSubmit}>
              <Form.Group controlId="formBasicMessage">
                <Form.Control as="textarea" placeholder="Enter message" />
              </Form.Group>
              <Button variant="info" type="submit" block>
                Send
              </Button>
          </Form>
        </div>        
      </div>
    )
  }
}

export default Contact;