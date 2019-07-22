import React, { Component } from 'react';
import Map from './Map'
import ProfileList from './ProfileList'

class Search extends Component {
  constructor(){
    super()
    this.state = {
      profiles: [
        {
          first_name: "Blueberry",
          last_name: "Pie",
          rating: 5,
          avatar: "https://api.adorable.io/avatars/250/blueberry@gmail.com.png"
        },
        {
          first_name: "Apple",
          last_name: "Tart",
          rating: 5,
          avatar: "https://api.adorable.io/avatars/250/apple@gmail.com.png"
        },
        {
          first_name: "Raspberry",
          last_name: "Scone",
          rating: 4.9,
          avatar: "https://api.adorable.io/avatars/250/raspberry@gmail.com.png"
        },
        {
          first_name: "Strawberry",
          last_name: "Cheesecake",
          rating: 4.8,
          avatar: "https://api.adorable.io/avatars/250/strawberry@gmail.com.png"
        },
        {
          first_name: "Apple",
          last_name: "Pie",
          rating: 5,
          avatar: "https://api.adorable.io/avatars/250/appleP@gmail.com.png"
        },
      ]
    }
  }

  render() {
    return (
      <div>
      <h1>Display List of profiles... and map</h1>
      <Map/>
      <ProfileList profiles={this.state.profiles}/>
      </div>
    )
  }
}

export default Search;