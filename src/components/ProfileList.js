import React from "react";
import "./styles/profilelist.css";
import ProfileListProfile from "./ProfileListProfile";

function ProfileList({ profiles, distanceQuery }) {
  return (
    <ul className="profilelist">
      {profiles.length === 0 ? (
        <h3>
          No profiles found within {distanceQuery / 1000}km of your location,
          try looking a little further away?
        </h3>
      ) : (
        profiles.map((user, index) => {
          return <ProfileListProfile user={user} index={index} key={index} />;
          // }
        })
      )}
    </ul>
  );
}

export default ProfileList;
