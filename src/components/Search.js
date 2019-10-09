import React, { useState, useEffect } from "react";
import Map from "./Map";
import ProfileList from "./ProfileList";
import "./styles/search.css";

export default function Search(props) {
  const [distance, setDistance] = useState(100);
  // const city = "Toronto";
  const [profiles, setProfiles] = useState([]);
  const [role, setRole] = useState(1);

  const handleChange = event => {
    event.preventDefault();
    let distance;
    if (event.target.value !== 0) {
      distance = event.target.value * 1000;
    }
    let query = "";
    if (localStorage.getItem("loggedInUsersId")) {
      query = `&dist_from_id=${localStorage.getItem(
        "loggedInUsersId"
      )}&dist_metres=${distance}`;
    }
    fetch(
      `https://critter-sitter-server.herokuapp.com/api/users?role=${role}${query}`
    ).then(results => {
      results.json().then(res => {
        setProfiles(res);
        setDistance(distance);
      });
    });
  };

  useEffect(() => {
    const role = props.match.params.role === "sitter" ? 2 : 1;

    // "http://localhost:8080/api/users?role=2"    // Fetch sitters
    // "http://localhost:8080/api/users?role=1"    // Fetch customers

    let isSubscribed = true;

    fetch(
      "https://critter-sitter-server.herokuapp.com/api/users?role=" + role
    ).then(results => {
      results.json().then(res => {
        if (isSubscribed) {
          setProfiles(res);
          setRole(role);
        }
      });
    });
    return () => (isSubscribed = false);
  });

  return (
    <div className="search">
      <div className="head">
        {localStorage.getItem("loggedInUsersId") !== null ? (
          <form>
            <div className="form-group">
              <label>
                {props.match.params.role === "sitter" ? (
                  <span>Show me sitters within</span>
                ) : (
                  <span>Show me owners within</span>
                )}
              </label>
              <select type="text" onChange={handleChange}>
                <option value="100">100 km</option>
                <option value="2">2 km</option>
                <option value="5">5 km</option>
                <option value="7">7 km</option>
                <option value="10">10 km</option>
              </select>
            </div>
          </form>
        ) : (
          " "
        )}
        <div className="user-title">
          {props.match.params.role === "sitter" ? (
            <h3>Sitters</h3>
          ) : (
            <h3>Owners</h3>
          )}
        </div>
      </div>
      <div className="search-container">
        <Map profiles={profiles} className="map-component" zoom={11} />
        <ProfileList profiles={profiles} distanceQuery={distance} />
      </div>
    </div>
  );
}
