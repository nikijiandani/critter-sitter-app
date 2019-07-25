import React from 'react';
import './styles/profile.css';
import './styles/reviews.css';

function Reviews(props) {

  return (
    <div className="profile-review">
        <h4>Reviews</h4>
        <ul className="reviews">
        {props.reviews.map((review, index) => {
            return (
                <div key={index} className="review-item">
                    <p className="reviewer-name">{review.from_name}: </p>
                    <span className="text-muted">{review.created_at}</span>
                    <p>{review.content}</p>
                </div>
            )
        })}
        </ul>
    </div>
  )
}

export default Reviews;