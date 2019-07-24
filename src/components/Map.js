import React, { Component } from 'react';
import './styles/map.css';
import GoogleMapReact from 'google-map-react';

const GM_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY

// text displays inside profile pin
const ProfilePins = ({ text }, props) => (

  <div className='map-pins'>
    {text}
  </div>
);

class SearchMap extends Component {
  //default zoom to Toronto
  static defaultProps = {
    center: {
      lat: 43.6532,
      lng: -79.3832
    },
    zoom: 10
  };

  render() {

    return (
      // create map and add a pin for each profile
      // GoogleMap passes $hover props to hovered components
      <div className='map'>

        <GoogleMapReact
          bootstrapURLKeys={{ key: GM_API_KEY }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >

        {this.props.profiles.map((mapProfile, index) => {
          return (
            <ProfilePins
              key={index}
              lat={mapProfile.home_lat ? mapProfile.home_lat : 0}
              lng={mapProfile.home_long ? mapProfile.home_long : 0}
              text={mapProfile.first_name}
            />
          )
         })}

        </GoogleMapReact>
      </div>
    );
  }
}



export default SearchMap;