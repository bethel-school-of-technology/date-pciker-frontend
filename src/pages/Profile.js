import React, { useState, useEffect } from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import axios from "axios";
import ResponsiveNav from "../components/ResponsiveNav";
import navLinks from "../components/NavLinksArray";

import CommentForm from "../components/CommentForm";


const Profile = () => {
  const [users, setUsers] = useState({ data: [] })
  

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/profile/" + users.UserId)
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // hey
  return (
    <div>
      <ResponsiveNav navLinks={navLinks} />
      <div className="profile">
        <div className="profile-logo-box">
          <img className="profile-logo" src={FamilyDateNight} alt="logo" />
        </div>
            <div key={users.FirstName}>{users.LastName}</div>
          <CommentForm/>
          {/* <App/> */}
      </div>
    </div>
  );
};

export default Profile;
