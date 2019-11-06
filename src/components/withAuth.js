import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
export default function withAuth(ComponentToProtect) {
  return class extends Component {
    constructor() {
      super();
      this.state = {
        loading: true,
        redirect: false,
      };
    }
    componentDidMount() {
      fetch('http://localhost:3001/checkToken')
        .then(res => {
          if (res.status === 200) {
            this.setState({ loading: false });
          } else {
            const error = new Error(res.error);
            throw error;
          }
        })
        .catch(err => {
          console.error(err);
          this.setState({ loading: false, redirect: true });
        });
    }
    render() {
      const { loading, redirect } = this.state;
      if (loading) {
        return null;
      }
      if (redirect) {
        return <Redirect to="/login" />;
      }
      return (
        <React.Fragment>
          <ComponentToProtect {...this.props} />
        </React.Fragment>
      );
    }
  }
}

// import React, { Component, useState } from "react";
// import { Redirect } from "react-router-dom";
// import axios from "axios";

// const withAuth = ComponentToProtect => {
//   const [redirect, setRedirect] = useState(false);
//   const [loading, setLoading] = useState(true);

//   function checkAuth() {
//     axios.get("http://localhost:3001/checkToken").then(res => {
//       if (res.status === 200) {
//         setLoading(false);
//       } else {
//         const error = new Error(res.error);
//         throw error;
//       }
//     })
//     .catch(err => {
//         console.error(err);
//         useState({ setLoading: false, setRedirect: true })
//     })
//   }
// };

// export default withAuth;
