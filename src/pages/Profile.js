import React, { useState, useEffect } from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import axios from "axios";
import ResponsiveNav from "../components/ResponsiveNav";
import navLinks from "../components/NavLinksArray";

const Profile = () => {
  const [info, setInfo] = useState({ data: [] });

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/profile")
      .then(res => {
        console.log(res);
        setInfo(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ResponsiveNav navLinks={navLinks} />
      <div className="profile">
        <div className="profile-logo-box">
          <img className="profile-logo" src={FamilyDateNight} alt="logo" />
        </div>
          {info.data.map(user => (
            <div key={user.FirstName}>{user.LastName}</div>
          ))}
      </div>
    </div>
  );
};

export default Profile;
