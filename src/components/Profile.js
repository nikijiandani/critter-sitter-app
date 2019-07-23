import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import Map from './Map';
import Reviews from './Reviews';
import './styles/profile.css';


class Profile extends Component {
  constructor() {
    super()
    this.state = {
      profiles:
        {
          first_name: "Dudley",
          last_name: "Maggio",
          location: "500 Kingston Rd, ON M4L 1V3", 
          num_of_ratings: 167,
          avatar: "https://api.adorable.io/avatars/111/Dudley5@gmail.com.png",
          image: "https://assurance-chien-et-chat.com/wp-content/uploads/2019/04/_139_Animal-de-compagnie-Wikipedia-Assurance-pour-Chien.jpg",
          home_coords:[-79.3049261, 43.6779947]
        },
        reviews: [
          {
            first_name: "Dudley",
            content: "This is an awesome review",
          },
          {
            first_name: "Reid",
            content: "This is also an awesome review",
          },
        ]
    }    
  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-header">
            <div className="profile-avatar">
                <img src={this.state.profiles.avatar} alt="avatar" />
            </div>
            <div>
              <div className="profile-name">    
                  <h3>{this.state.profiles.first_name} {this.state.profiles.last_name}</h3>
                  <Link to="/profile/:id/contact" className="btn btn-info">Contact</Link>
              </div>
              <div className="profile-info">
                  <h6>{this.state.profiles.location}</h6>
                  <p>Number of Ratings: {this.state.profiles.num_of_ratings}</p>
              </div>
            </div>
          </div>
          <div className="profile-image">
              <img src={this.state.profiles.image} alt="users-images" />
          </div>
          <Reviews reviews={this.state.reviews}/>
        </div>
        <div className="profile-map">
          <h4>Sitter's Neighbourhood</h4>
          <Map profiles={[this.state.profiles]}/>
        </div>
      </div>
    )
  }  
}

export default Profile;