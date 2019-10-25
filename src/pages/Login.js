import React from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import { Link } from "react-router-dom";
import useForm from '../components/useForm';
import validate from '../components/validate';
// import axios from 'axios';

const Login = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(submit, validate)
  
  function submit() {
    console.log("SUCCESS")
  }
  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-logo">
        <img src={FamilyDateNight} alt="Family Logo" />
      </div>
      <div>
        <h3 className="signup-text">Login to your account to begin</h3>
      </div>
      <div className="form-login">
        <input value={values.username} onChange={handleChange} type="text" placeholder="Username" name="username" />
        {errors.email && <p style={{color: '#ff0000'}}>{errors.email}</p>}
        <input value={values.password} onChange={handleChange} type="password" placeholder="Password" name="password" />
        <button type="submit" className="login-button">Login</button>
        {errors.password && <p style={{color: '#ff0000'}}>{errors.password}</p>}
      </div>
      <p className="signup-text">
        You can also click here to{" "}
        <Link style={{ textDecoration: "none" }} to="/signup">
          Sign-up
        </Link>
      </p>
    </form>
  );
};
export default Login;
