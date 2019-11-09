import React from 'react';
import ResponsiveNav from "../components/ResponsiveNav";
import navLinks from "../components/NavLinksArray";
import FamilyDateNight from "../logos/Family Date Night.png";

const Ideas = () => (
    <div>
      <ResponsiveNav navLinks={navLinks} />
      <div className="profile">
        <div className="profile-logo-box">
          <img className="profile-logo" src={FamilyDateNight} alt="logo" />
        </div>
        <h1>ideas will go here!</h1>
      </div>
    </div>
)

export default Ideas