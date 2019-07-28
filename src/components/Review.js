import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Review extends Component {
  render(){
    return (
      <div className="review">
        <div className="review-info">
          <StarRatingComponent
            name="rating" 
            starCount={5}
            value={this.props.review.rating}
          />
          <p>
            {new Date(this.props.review.created_at).toLocaleString(
              'en-US', 
              { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
            )}
          </p>
        </div>
        <p>{this.props.review.content}</p>
        <div className="review-author">
          <img src={this.props.review.avatar} alt="avatar" className="review-avatar" />
          <strong>{this.props.review.first_name} {this.props.review.last_name}</strong>
        </div>
      </div>
    )
  }
}

export default Review;