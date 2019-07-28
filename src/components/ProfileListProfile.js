import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import { Link } from "react-router-dom";


function ProfileListProfile(props) {
  let myIndex = props.index + 1;
  return (
    <li className="item" key={props.index}>
      <div className="item-details">
        <img src={props.user.avatar} alt="avatar" className="avatar" />
        <div className="item-info">
          <span>{myIndex}.</span>
          <Link to={`/profile/${props.user.user_id}`}>{props.user.first_name} {props.user.last_name}</Link>
          <div className="rating">
            <div className="rating-stars">
              <StarRatingComponent 
                name="rate1" 
                starCount={5}
                value={parseInt(props.user.avg_rating)}
              />
            </div>
            <div className="rating-number">
              { props.user.total_ratings !== null ?
              <p>({props.user.total_ratings} ratings)</p>
              :
              <p>(Not rated yet)</p>
              }                
            </div>
          </div>
          <div className="location">
            {props.user.city}, ON, {props.user.postal_code}
          </div>
        </div>
      </div>
      <div className="pet">
        <div className="pet-text">
          { props.user.role === 2 ?
          <p>Hosts:</p>
          :
          <p>Owns:</p>
          }
        </div>
        <div className="pet-icon">
            {props.user.sitter_pet_types.map((pet) => 
            <div key={pet.pet_type_id}>
              {pet.icon}
            </div>
            )}
        </div>
      </div>
    </li>
  )
}

export default ProfileListProfile