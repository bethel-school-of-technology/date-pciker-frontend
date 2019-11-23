import React, { useState, useEffect } from "react";
import FamilyDateNight from "../logos/Family Date Night.png";
import axios from "axios";
import ResponsiveNav from "../components/ResponsiveNav";
import navLinks from "../components/NavLinksArray";
import useForm from '../components/useForm'

import FileUpload from '../components/FileUpload';

const Profile = () => {
  const [users, setUsers] = useState({ data: [] })
  const { values, handleChange, handleSubmit, } = useForm(submit)
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
        <h1 style={{ "margin-top": "50px" }} className="userName" key={users.UserId}> Welcome {users.FirstName} {users.LastName} Patrick Murray</h1>



        <form onSubmit={handleSubmit}>
          <div>
            <h3 className="getIdea" key={users.IdeasId}> {users.IdeasBody}"Idea Generated here"</h3>
          </div>
          {/* <input
            className="getIdea"
            //will pull ideas from databe
            value={values.IdeasBody}
            onChange={handleChange}
            type="text"
            name="IdeasBody"
            id="commentbody"
            placeholder="Idea Generated here"
          /> */}
          <button style={{ "margin-bottom": "100px" }} id="formbtn-post" type="submit" className="btn btn-md formbtn-post">Get Idea</button>

          <input
            value={values.IdeasBody}
            onChange={handleChange}
            // style={{ "margin-top": "90px" }}
            type="text"
            name="IdeasBody"
            id="commentbody"
            placeholder="Write your idea here..."
          />
          <button style={{ "margin-bottom": "250px" }} id="formbtn-post" type="submit" className="btn btn-md formbtn-post">Send Idea</button>
        </form>
        <div className="comBox">
          <center>"Youre Awesome</center>
          <hr></hr>
          <center>"{values.Comments}Man this was so awesome!"</center>
          <hr></hr>
          <center>"Such a fun date. We will try this again and I am sure it will be just as fun"</center>
          <hr></hr>
          <button id="formbtn-post" type="submit" className="btn btn-md formbtn-post">Post Comment</button>
          <hr></hr>
          <FileUpload />
        </div>
      </div>
     
    </div>
  );
};

export default Profile;
