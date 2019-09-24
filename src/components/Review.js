import React, { Component } from "react";
import StarRatingComponent from "react-star-rating-component";

class Review extends Component {
  render() {
    return (
      <div className="review">
        <div className="review-info">
          <StarRatingComponent
            name="rating"
            starCount={5}
            value={this.props.review.rating}
          />
          <p>
            {new Date(this.props.review.created_at).toLocaleString("en-US", {
              weekday: "long",
              year: "numeric",
              month: "long",
              day: "numeric"
            })}
          </p>
        </div>
        <p>{this.props.review.content}</p>
        <div className="review-author">
          <a
            href={`http://localhost:3000/profile/${this.props.review.from_id}`}
          >
            <img
              src={this.props.review.avatar}
              alt="avatar"
              className="review-avatar"
            />
          </a>
          <a
            href={`http://localhost:3000/profile/${this.props.review.from_id}`}
          >
            <strong>
              {this.props.review.first_name} {this.props.review.last_name}
            </strong>
          </a>
        </div>
      </div>
    );
  }
}

export default Review;
