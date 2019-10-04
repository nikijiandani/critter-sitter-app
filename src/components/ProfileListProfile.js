import React from "react";
import StarRatingComponent from "react-star-rating-component";
import { Link } from "react-router-dom";

export default function ProfileListProfile({ index, user }) {
  let myIndex = index + 1;
  return (
    <li className="item" key={index}>
      <div className="item-details">
        <img src={user.avatar} alt="avatar" className="avatar" />
        <div className="item-info">
          <div>
            <div>
              <span>{myIndex}.</span>
              <Link to={`/profile/${user.user_id}`}>
                {user.first_name} {user.last_name}
              </Link>
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
                {user.total_ratings !== null ? (
                  <p>({user.total_ratings} ratings)</p>
                ) : (
                  <p>(No ratings)</p>
                )}
              </div>
            </div>
            <div className="location">
              {user.city}, ON, {user.postal_code}
            </div>
          </div>
          <div className="pet">
            <div className="pet-text">
              {user.role === 2 ? <p>Hosts:</p> : <p>Owns:</p>}
            </div>
            <div className="pet-icon">
              {user.sitter_pet_types.map(pet => (
                <div key={pet.pet_type_id}>{pet.icon}</div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </li>
  );
}
