import React, { Component } from 'react';
import {Form, Button} from 'react-bootstrap'
import './styles/messages.css'

class Messages extends Component {
  render() {
    if (!this.props.msgs) {
      return (<div>No messages found!</div>)
    }

    const messages = this.props.msgs.map((msg, index) => {
      if(msg.other_user_id === this.props.currentProfile){
        if(msg.msg_dir === 'fromuser'){
          return (<span className="message-item-fromuser" key={index}>
            <h5>Me:</h5>
            <p>{msg.content}</p>
            <p className="text-muted">{new Date(msg.created_at).toLocaleString()}</p>
          </span>)
        }
        return (
          <span className="message-item-touser" key={index}>
            <h5>{msg.first_name} {msg.last_name}:</h5>
            <p>{msg.content}</p>
            <p className="text-muted">{new Date(msg.created_at).toLocaleString()}</p>
          </span>
        )
      }
      return (<div key={index}></div>)
    })

    return (
      <div className="message-container">
        <div className="message-block">
          <ul className="message-list">
            {messages}
          </ul>
        </div>
      </div>
    )
  }
}

export default Messages;                         