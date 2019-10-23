import React from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <form>
      <div className="form-logo">
        <img
          src={FamilyDateNight}
          alt="Family Logo"
        />
      </div>
      <div className="form-login">
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button className='login-button'>Login</button>
      </div>
      <p className="signup-text">
        You can also click here to {" "}
        <Link style={{ textDecoration: "none" }} to="/signup">
          Sign-up
        </Link>
      </p>
    </form>
  );
};
export default Login;
