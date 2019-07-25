import React, { Component } from 'react';
import './styles/profile.css';
import './styles/reviews.css';
import Review from './Review'

class Reviews extends Component {
  render(){
    const reviews = this.props.reviews.map((review, index) => {
      return <Review key={index} review={review}/>
    })
    return (
      <div className="profile-review">
          <h4>Reviews</h4>
          <div className="reviews">
              {reviews}
          </div>
      </div>
    )
  }
}

export default Reviews;