import React from "react";
import FamilyDateNightWhite from "../logos/Family Date Night (white).png";
import { Link } from "react-router-dom";

const Home = () => (
  <div className="home">
    <div className="bg">
      <div className="logo-box">
        <img className="home-logo" src={FamilyDateNightWhite} alt="logo" />
      </div>
      <div className="coverColor">
        <div className="home-box">
          <h1 className="welcome">We believe in family.</h1>
          <h4 className="propser">and we want yours to prosper.</h4>
          <Link to="/signup">
            <button type="button" className="home-button">
              Click to get started
            </button>
          </Link>
        </div>
      </div>
    </div>
  </div>
);

export default Home;
