import React from 'react';
import './styles/profilelist.css';
import { Link } from "react-router-dom"; 

function ProfileList(props) {
  
  return (
    <ul className="profilelist">
      {props.profiles.map(user => {
        return (
        <li className="item" key={user.id}>
          <img src={user.avatar} alt="avatar" className="avatar" />
          <div>
            <span>{user.id}.</span>
            <Link to={`/profile/${user.id}`}>{user.first_name} {user.last_name}</Link>
            <p>Avg Rating: {user.rating}</p>
          </div>
        </li>
        )
      })}
    </ul>
  )
}

export default ProfileList;