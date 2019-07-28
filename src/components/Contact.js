import React, { Component } from 'react';

import './styles/contact.css'
import Messages from './Messages'

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
        <div className="conversations">
          <h4>Messages</h4>
          <div className="conversation-card">
            
          </div>
        </div>
        <div className="chat-box">
          <p className="title">Conversation with {this.state.profiles.first_name}</p>
          <Messages 
          msgs={this.state.messages} 
          currentProfile={this.state.profiles.user_id}
          onSubmit={this.handleSubmit} 
          />
        </div>
      </div>
    )
  }
}

export default Contact;