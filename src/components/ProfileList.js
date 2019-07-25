import React from 'react';
import './styles/profilelist.css';
import { Link } from "react-router-dom";

function ProfileList(props) {

  return (
    <ul className="profilelist">
      {props.profiles.map(user => {
        return (
        <li className="item" key={user.user_id}>
          <img src={user.avatar} alt="avatar" className="avatar" />
          <div>
            <span>{user.user_id}.</span>
            <Link to={`/profile/${user.user_id}`}>{user.first_name} {user.last_name}</Link>
            <p>Avg Rating: {user.avg_rating}</p>
          </div>
        </li>
        )
      })}
    </ul>
  )
}

export default ProfileList;