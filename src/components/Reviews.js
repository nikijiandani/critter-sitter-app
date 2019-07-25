import React from 'react';
import './styles/profile.css';

function Reviews(props) {

  return (
    <div className="profile-review">
        <h4>Reviews</h4>
        <ul className="reviews">
        {props.reviews.map((review, index) => {
            return (
                <div key={index} className="review-item">
                    <h5>{review.first_name}</h5>
                    <p>{review.content}</p>
                </div>
            )
        })}
        </ul>
    </div>
  )
}

export default Reviews;