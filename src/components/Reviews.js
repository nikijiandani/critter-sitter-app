import React from "react";
import "./styles/profile.css";
import "./styles/reviews.css";
import Review from "./Review";

export default function Reviews({ reviews }) {
  return (
    <div className="profile-review">
      <h4>Reviews</h4>
      <div className="reviews">
        {reviews.map((review, index) => {
          return <Review key={index} review={review} />;
        })}
      </div>
    </div>
  );
}
