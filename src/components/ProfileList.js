import React from 'react';
import './styles/profilelist.css';

function ProfileList(props) {
  
  return (
    <ul className="profilelist">
      {props.profiles.map(user => {
        return (
        <li className="item" key={user.id}>
          <img src={user.avatar} alt="avatar" className="avatar" />
          <div>
            <a href="/">{user.first_name} {user.last_name}</a>
            <p>Avg Rating: {user.rating}</p>
          </div>
        </li>
        )
      })}
    </ul>
  )
}

export default ProfileList;