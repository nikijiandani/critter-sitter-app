import React, { Component } from 'react';
import './styles/messages.css'

class Messages extends Component {
  constructor() {
    super()
    this.state = {
      data: null
    }    
  }

  componentDidMount() {
    fetch('http://localhost:8080/api/messages?user_id=1')
    .then(results => {
      results.json().then((res) => {
        console.log(res)
        this.setState({
          data: res
        });
      })
    })
  }  

  render() {
    if (!this.state.data) {
      return (<div></div>)
    }

    return (
      <div className="message-container">
        <div className="message-block">
          <h4>Messages</h4>
          <ul className="message-list">
                  {this.state.data.map((msg, index) =>
                    <div key={index}>
                    { msg.msg_dir === "fromuser" ?
                    <span className="message-item-fromuser">
                      <h5>Dudley Maggio:</h5>
                      <p>{msg.content}</p>
                      <p>{new Date(msg.created_at).toLocaleString()}</p>
                    </span>  
                    :
                    <span className="message-item-touser">
                      <h5>{msg.first_name} {msg.last_name}:</h5>
                      <p>{msg.content}</p>
                      <p>{new Date(msg.created_at).toLocaleString()}</p>
                    </span>  
                    } 
                    </div>
                  )}
          </ul>
        </div>
      </div>
    )
  }
}

export default Messages;                         