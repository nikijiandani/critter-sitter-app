import React from "react";
import StarRatingComponent from "react-star-rating-component";

export default function Review({ review }) {
  return (
    <div className="review">
      <div className="review-info">
        <StarRatingComponent
          name="rating"
          starCount={5}
          value={review.rating}
        />
        <p>
          {new Date(review.created_at).toLocaleString("en-US", {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          })}
        </p>
      </div>
      <p>{review.content}</p>
      <div className="review-author">
        <a href={`http://localhost:3000/profile/${review.from_id}`}>
          <img src={review.avatar} alt="avatar" className="review-avatar" />
        </a>
        <a href={`http://localhost:3000/profile/${review.from_id}`}>
          <strong>
            {review.first_name} {review.last_name}
          </strong>
        </a>
      </div>
    </div>
  );
}
