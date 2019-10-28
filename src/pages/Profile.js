import React, { useState, useEffect } from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import axios from "axios";

const Profile = () => {
  const [data, setData] = useState([
    {
      data: []
    }
  ]);

  useEffect(() => {
    axios
      .get('')
      .then(res => setData(res.data));
  });

  return (
    <div className="home">
      <img className="home-logo" src={FamilyDateNight} alt="logo" />
      <ul>
        {data.map(info => (
          <li key={info.id}>{info.username}</li>
        ))}
      </ul>
    </div>
  );
};

export default Profile;
