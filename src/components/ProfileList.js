import React from 'react';
import './styles/profilelist.css';

function ProfileList(props) {
  
  return (
    <ul className="profilelist">
      {props.profiles.map(message => {
        return (
        <li className="item">
          <img src={message.avatar} alt="avatar" className="avatar" />
          <div>
            <p>{message.first_name} {message.last_name}</p>
            <p>Avg Rating: {message.rating}</p>
          </div>
        </li>
        )
      })}
    </ul>
  )
}

export default ProfileList;