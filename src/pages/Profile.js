import React, { useState, useEffect } from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import axios from "axios";
import ResponsiveNav from "../components/ResponsiveNav";
import navLinks from "../components/NavLinksArray";
import useForm from '../components/useForm'

const Profile = () => {
  const [users, setUsers] = useState({ data: [] })
  const { values, handleChange, handleSubmit, } =useForm(submit)
  // const [ ideas, setIdeas ] = useState({data: []})
  
function submit() {
  axios.post('http://localhost:3001/ideas', values)
  // .then(res => {
  //   setIdeas(res.data)
  // })
  // .catch(err => {
  //   console.log(err);
  // })
}

  useEffect(() => {
    axios
      .get("http://localhost:3001/users/profile/2")
      .then(res => {
        setUsers(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <ResponsiveNav navLinks={navLinks} />
      <div className="profile">
        <div className="profile-logo-box">
          <img className="profile-logo" src={FamilyDateNight} alt="logo" />
        </div>
            <h1 className="userName" key={users.UserId}> Welcome {users.FirstName}</h1>
            <div>
              <h3 key={users.IdeasId}>{users.IdeasBody}</h3>
            </div>
            <form onSubmit={handleSubmit}> 
            <button id="formbtn-post" type="submit" className="btn btn-md formbtn-post">Get Idea</button>
            <br/>
                <input
                    value={values.IdeasBody}
                    onChange={handleChange}
                    style={{ "margin-top": "90px"}}
                    type="text"
                    name="IdeasBody"
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
