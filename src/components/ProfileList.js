import React from 'react';
import './styles/profilelist.css';
import { Link } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';

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
            <div className="pet-icon">
                 {user.sitter_pet_types.map((pet) => 
                 <div key={pet.pet_type_id}>
                  {pet.icon}
                 </div>
                 )}
            </div>
            <div className="location">
              {user.city}, ON, {user.postal_code}
            </div>
            <div className="rating">
              <StarRatingComponent 
                  name="rate1" 
                  starCount={5}
                  value={parseInt(user.avg_rating)}
              />
            </div>
          </div>
        </li>
        )
      })}
    </ul>
  )
}

export default ProfileList;