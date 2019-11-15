import React, { useState } from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import { Link, Redirect } from "react-router-dom";
import useForm from "../components/useForm";
import validate from '../components/validate';
import axios from 'axios'
import ResponsiveNav from "../components/ResponsiveNav";
import navLinks from "../components/NavLinksArray";


const Signup = () => {
  const { values, handleChange, handleSubmit, errors } = useForm(submit, validate);
  const [ redirect, setRedirect ] = useState(false)
    function submit() {
      axios.post('http://localhost:3001/users/signup', values)
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
        alert('There was an error signing up, Please try again.')
      })
    }

  return (
   <div>
      <ResponsiveNav navLinks={navLinks} />
      {redirect ? <Redirect to='/login'/> : null}
      <form onSubmit={handleSubmit} noValidate>
        <div className="form-logo">
          <img src={FamilyDateNight} alt="Family Logo" />
        </div>
        <div>
          <h3 className="signup-text">Create your account to begin</h3>
        </div>
        <div className="form-login">
          <input value={values.FirstName} onChange={handleChange} type="text" placeholder="First Name" name="FirstName" required />
          <input value={values.LastName} onChange={handleChange} type="text" placeholder="Last Name" name="LastName" required />
          <input value={values.Email} onChange={handleChange} type="email" placeholder="Email" name="Email" required />
          <input value={values.Username} onChange={handleChange} type="text" placeholder="Username" name="Username" />
          <input value={values.Password} onChange={handleChange} type="password" placeholder="Password" name="Password" />
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
    </div>
  );
};
export default Signup;
