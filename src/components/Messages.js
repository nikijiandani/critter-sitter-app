import React, { Component } from "react";
import "./styles/messages.css";

class Messages extends Component {
  messagesEndRef = React.createRef();

  componentDidUpdate() {
    this.scrollToBottom();
    console.log(this.props.msgs);
  }

  scrollToBottom = () => {
    this.messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
  };

  render() {
    if (!this.props.msgs) {
      return <div>No messages found!</div>;
    }

    const messages = this.props.msgs.map((msg, index) => {
      if (msg.other_user_id === this.props.currentProfile) {
        if (msg.msg_dir === "fromuser") {
          return (
            <li className="message message-item-fromuser" key={index}>
              <h5>Me:</h5>
              <p>{msg.content}</p>
              <p className="date-text">
                {new Date(msg.created_at).toLocaleString("en-US", {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                  hour: "numeric",
                  minute: "numeric"
                })}
              </p>
            </li>
          );
        }
        return (
          <li className="message message-item-touser" key={index}>
            <h5>
              {msg.first_name} {msg.last_name}:
            </h5>
            <p>{msg.content}</p>
            <p className="date-text">
              {new Date(msg.created_at).toLocaleString("en-US", {
                weekday: "long",
                year: "numeric",
                month: "long",
                day: "numeric",
                hour: "numeric",
                minute: "numeric"
              })}
            </p>
          </li>
        );
      }
      return <div key={index}></div>;
    });

    return (
      <ul className="message-list">
        {messages}
        <div ref={this.messagesEndRef} />
      </ul>
    );
  }
}

export default Messages;
