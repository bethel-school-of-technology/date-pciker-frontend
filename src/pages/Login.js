import React, { useState } from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import { Link, Redirect } from "react-router-dom";
import useForm from '../components/useForm';
import validate from '../components/validate';
import axios from 'axios';
import ResponsiveNav from '../components/ResponsiveNav'
import navLinks from '../components/NavLinksArray';

const Login = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(submit, validate)
  const [ redirect, setRedirect ] = useState(false)
  
  const headers = {
    'Content-Type': 'application/json',
    'Authorization': 'jwt'
  }
  function submit() {
    axios.post('http://localhost:3001/login', values, headers)
    .then(res => {
      if (res.status === 200) {
        setRedirect(true)
      } else {
        const error = new Error(res.errors);
        throw error;
      }
    })
    .catch(err => {
      console.error(err);
      alert('Something went wrong, please try again.');
    })
  }
  return (
    <div>
    <ResponsiveNav navLinks={navLinks} />
    {redirect ? <Redirect to='/users/profile'/> : null}
    <form onSubmit={handleSubmit} noValidate>
      <div className="form-logo">
        <img src={FamilyDateNight} alt="Family Logo" />
      </div>
      <div>
        <h3 className="signup-text">Login to your account to begin</h3>
      </div>
      <div className="form-login">
        <input value={values.username} onChange={handleChange} type="text" placeholder="Username" name="Username" />
        {errors.email && <p style={{color: '#ff0000'}}>{errors.email}</p>}
        <input value={values.password} onChange={handleChange} type="password" placeholder="Password" name="Password" />
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
    </div>
  );
};
export default Login;
