import React, { Component } from 'react';
import './styles/messages.css'

class Messages extends Component {
  constructor() {
    super()
    this.state = {
      messages: [
        {
          from_id: "Dudley",  //1
          to_id: "Lester",    //2
          content: "Hey, I'm looking for a sitter for New Year's eve this year. Are you available?",
          created_at: "July 22, 2019 03:24:00"
        },
        {
          from_id: "Lester",  //2
          to_id: "Dudley",    //1
          content: "Sure! I don't mind. Looks like you're in my area too!",
          created_at: "July 22, 2019 05:24:00"
        },
        {
          from_id: "Dudley",  //1
          to_id: "Lester",    //2
          content: "Great! Talk to you soon! :)",
          created_at: "July 22, 2019 06:24:00"
        },      
      ]
    }    
  }

  render() {
    return (
      <div className="message-container">
        <div className="message-block">
          <h4>Conversation with Lester</h4>
          <ul className="message-list">
          {this.state.messages.map((message, index) => {
              return (
                  <div key={index} className="message-item">
                      <h5>{message.from_id}:</h5>
                      <p>{message.content}</p>
                      <p>{message.created_at}</p>
                  </div>
              )
          })}
          </ul>
        </div>
      </div>
    )
  }
}

export default Messages;