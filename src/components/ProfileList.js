import React from 'react';
import './styles/profilelist.css';
import ProfileListProfile from './ProfileListProfile';

function ProfileList(props) {
  return (
    <ul className="profilelist">
      {props.profiles.map((user, index) => {
          return (
            <ProfileListProfile user={user} index={index} key={index}/>
          )
        // }
      })}
    </ul>
  )
}

export default ProfileList;