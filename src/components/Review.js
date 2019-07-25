import React, { Component } from 'react';
import StarRatingComponent from 'react-star-rating-component';

class Review extends Component {
  render(){
    return (
      <div>
        <p><strong>{this.props.review.first_name} :</strong></p>
        <StarRatingComponent
          name="rating" 
          starCount={5}
          value={this.props.review.rating}
        />
        <p>{this.props.review.content}</p>
      </div>
    )
  }
}

export default Review;