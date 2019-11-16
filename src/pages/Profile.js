import React, { useState, useEffect } from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import axios from "axios";
import ResponsiveNav from "../components/ResponsiveNav";
import navLinks from "../components/NavLinksArray";
import useForm from '../components/useForm'

const Profile = () => {
  const [users, setUsers] = useState({ data: [] })
  const { values, handleChange, handleSubmit, } =useForm(submit)
  
function submit() {
  axios.post('')
}

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/profile/1")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  // hey
  return (
    <div>
      <ResponsiveNav navLinks={navLinks} />
      <div className="profile">
        <div className="profile-logo-box">
          <img className="profile-logo" src={FamilyDateNight} alt="logo" />
        </div>
            <div key={users.FirstName}>{users.LastName}</div>
            <form onSubmit={handleSubmit}> 
            <button id="formbtn-post" type="submit" className="btn btn-md formbtn-post">Get Idea</button>
            <br/>
                <input
                    value={values.Idea}
                    onChange={handleChange}
                    style={{ "margin-top": "90px"}}
                    type="text"
                    name="Idea"
                    id="commentbody"
                    placeholder="Write your idea here..."
                />
                <button id="formbtn-post" type="submit" className="btn btn-md formbtn-post">Send Idea</button>
            </form>
      </div>
    </div>
  );
};

export default Profile;
