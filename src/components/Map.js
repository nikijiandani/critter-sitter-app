import React from "react";
import "./styles/map.css";
import GoogleMapReact from "google-map-react";

const GM_API_KEY = process.env.REACT_APP_GOOGLE_MAPS_API_KEY;

// text displays inside profile pin
const ProfilePins = ({ text }) => <div className="map-pins">{text}</div>;

const Circle = ({ text }) => <div className="map-circle">{text}</div>;

export default function SearchMap({
  profilePageExists,
  profiles,
  center,
  zoom
}) {
  let circleValue;
  if (profilePageExists) {
    circleValue = (
      <Circle
        center={{
          lat: profiles[0].home_lat,
          lng: profiles[0].home_long
        }}
        radius={100}
        text=""
      />
    );
  }

  return (
    // create map and add a pin for each profile
    // GoogleMap passes $hover props to hovered components
    <div className="map">
      <GoogleMapReact
        bootstrapURLKeys={{
          key: GM_API_KEY,
          v: "3.31"
        }}
        center={
          profiles[0]
            ? {
                lat: profiles[0].home_lat,
                lng: profiles[0].home_long
              }
            : center
        }
        zoom={zoom}
      >
        {profiles.map((mapProfile, index) => {
          if (
            !profilePageExists &&
            mapProfile.user_id.toString() !==
              localStorage.getItem("loggedInUsersId")
          ) {
            return (
              <ProfilePins
                key={index}
                lat={mapProfile.home_lat ? mapProfile.home_lat : 0}
                lng={mapProfile.home_long ? mapProfile.home_long : 0}
                text={index + 1}
              />
            );
          }
        })}
        {circleValue}
      </GoogleMapReact>
    </div>
  );
}

//default zoom to Toronto
SearchMap.defaultProps = {
  center: {
    lat: 43.6532,
    lng: -79.3832
  },
  zoom: 13
};
