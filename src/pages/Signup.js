import React from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import { Link } from "react-router-dom";
import useForm from "../components/useForm";
import validate from '../components/validate';

const Signup = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(submit, validate);
    function submit() {
      console.log("SUCCESSFUL SIGNUP")
    }

  return (
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-logo">
        <img src={FamilyDateNight} alt="Family Logo" />
      </div>
      <div>
        <h3 className="signup-text">Create your account to begin</h3>
      </div>
      <div className="form-login">
        <input value={values.firstName} onChange={handleChange} type="text" placeholder="First Name" name="firstName" required />
        <input value={values.lastName} onChange={handleChange} type="text" placeholder="Last Name" name="lastName" required />
        <input value={values.email} onChange={handleChange} type="email" placeholder="Email" name="email" required />
        <input value={values.username} onChange={handleChange} type="text" placeholder="Username" name="username" />
        <input value={values.password} onChange={handleChange} type="password" placeholder="Password" name="password" />
        {errors.password && <p style={{color: '#ff0000'}}>{errors.password}</p>}
        <button type="submit" className="login-button">
          Create Account
        </button>
      </div>
      <p className="signup-text">
        You can also click here to{" "}
        <Link style={{ textDecoration: "none" }} to="/login">
          Login
        </Link>
      </p>
    </form>
  );
};
export default Signup;
