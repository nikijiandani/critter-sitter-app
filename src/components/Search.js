import React, { Component } from 'react';
import Map from './Map'
import ProfileList from './ProfileList'
import './styles/search.css'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      city: "Toronto",
      profiles: [
        {
          id: 1,
          first_name: "Blueberry",
          last_name: "Pie",
          rating: 5,
          avatar: "https://api.adorable.io/avatars/250/blueberry@gmail.com.png",
          home_coords:[-79.3049261, 43.6779947]
        },
        {
          id: 2,
          first_name: "Apple",
          last_name: "Tart",
          rating: 5,
          avatar: "https://api.adorable.io/avatars/250/apple@gmail.com.png",
          home_coords:[-79.4160545, 43.7295661]
        },
        {
          id: 3,
          first_name: "Raspberry",
          last_name: "Scone",
          rating: 4.9,
          avatar: "https://api.adorable.io/avatars/250/raspberry@gmail.com.png",
          home_coords:[-79.3983443, 43.6878955]
        },
        {
          id: 4,
          first_name: "Strawberry",
          last_name: "Cheesecake",
          rating: 4.8,
          avatar: "https://api.adorable.io/avatars/250/strawberry@gmail.com.png",
          home_coords:[-79.2919107, 43.6711546]
        },
        {
          id: 5,
          first_name: "Apple",
          last_name: "Pie",
          rating: 5,
          avatar: "https://api.adorable.io/avatars/250/appleP@gmail.com.png",
          home_coords:[-79.3052774, 43.6743661]
        },
      ]
    }
  }

  render() {
    return (
      <div className="search">
        <h3>Sitters in {this.state.city}</h3>
        <div className="search-container">
          <Map profiles={this.state.profiles} className="map-component"/>
          <ProfileList profiles={this.state.profiles}/>
        </div>
      </div>
    )
  }
}

export default Search;