import React from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="coverColor">
        <img className="home-logo" src={FamilyDateNight} alt="logo" />
        <Link to="/signup" className='homeButton'>
          <button>Get Started</button>
        </Link>
      </div>
  </div>
);

export default Home;
