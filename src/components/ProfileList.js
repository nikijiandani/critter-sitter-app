import React from 'react';
import './styles/profilelist.css';
import { Link } from "react-router-dom";
import StarRatingComponent from 'react-star-rating-component';

function ProfileList(props) {
  return (
    <ul className="profilelist">
      {props.profiles.map((user, index) => {
        if (user.user_id === parseInt(localStorage.getItem('loggedInUsersId'))) {
          return <li style={{display: "none"}} key={"do-not-show"}></li>
        } else {
          return (
          <li className="item" key={user.user_id}>
            <img src={user.avatar} alt="avatar" className="avatar" />
            <div className="item-details">
            <span>{index + 1}.</span>
              <Link to={`/profile/${user.user_id}`}>{user.first_name} {user.last_name}</Link>
              <div className="pet">
                <div className="pet-text">
                  { user.role === 2 ?
                  <p>Hosts</p>
                  :
                  <p>Owns</p>
                  }
                </div>
                <div className="pet-icon">
                    {user.sitter_pet_types.map((pet) => 
                    <div key={pet.pet_type_id}>
                      {pet.icon}
                    </div>
                    )}
                </div>
              </div>
              <div className="rating">
                <div className="rating-stars">
                  <StarRatingComponent 
                      name="rate1" 
                      starCount={5}
                      value={parseInt(user.avg_rating)}
                  />
                </div>
                <div className="rating-number">
                  { user.total_ratings !== null ?
                  <p>({user.total_ratings} ratings)</p>
                  :
                  <p>(Not rated yet)</p>
                  }                
                </div>
              </div>
              <div className="location">
                {user.city}, ON, {user.postal_code}
              </div>
            </div>
          </li>
          )
        }
      })}
    </ul>
  )
}

export default ProfileList;