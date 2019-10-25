import React from 'react';
import FamilyDateNight from "../logos/Family Date Night.png";
import { Link } from "react-router-dom";

const Signup = () => (
    <form>
    <div className="form-logo">
    <img
      src={FamilyDateNight}
      alt="Family Logo"
    />
  </div>
  <div>
    <h3 className='signup-text'>Create your account to begin</h3>
  </div>
  <div className="form-login">
    <input type="text" placeholder="First Name" name="firstName" />
    <input type="text" placeholder="Last Name" name="lastName" />
    <input type="text" placeholder="Email" name="email" />
    <input type="text" placeholder="Username" name="username" />
    <input type="password" placeholder="Password" name="password" />
    <button className='login-button'>Create Account</button>
  </div>
  <p className="signup-text">
    You can also click here to {" "}
    <Link style={{ textDecoration: "none" }} to="/login">
      Login
    </Link>
  </p>
    </form>
)

export default Signup;
