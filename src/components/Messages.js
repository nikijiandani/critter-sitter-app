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
        <div className="message-block-to">
          <h4>Messages To {this.state.data.first_name}</h4>
          <ul className="message-list">
            <div className="message-item">
                  {this.state.data.to_me.map((to, ind) =>
                    <div key={ind}>
                      <h5>{to.first_name} {to.last_name}:</h5>
                      <p>{to.content}</p>
                      <p>{new Date(to.created_at).toLocaleString()}</p>
                    </div>   
                  )}
            </div>
          </ul>
        </div>

        <div className="message-block-from">
          <h4>Messages From {this.state.data.first_name}</h4>
          <ul className="message-list">
            <div className="message-item">
                  {this.state.data.from_me.map((from, ind) =>
                    <div key={ind}>
                      <h5>{from.first_name} {from.last_name}:</h5>
                      <p>{from.content}</p>
                      <p>{new Date(from.created_at).toLocaleString()}</p>
                    </div>   
                  )}
            </div>
          </ul>
        </div>        
      </div>
    )
  }
}

export default Messages;