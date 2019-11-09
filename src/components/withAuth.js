// import axios from 'axios'
// import React, { useState, useEffect, Component } from 'react'
// import { Redirect } from 'react-router-dom'

// const CheckUser = (ComponentToProtect) => {
//   const [ loading, setLoading ] =useState(true);
//   const [ user, setUser ] = useState(null);

//   useEffect(() => {
//     fetch('http://localhost:3001/users/profile')
//     .then(x => {
//       x.json().then(y => {
//         setUser(y.user)
//         console.log(y.user)
//         setLoading(false)
//       })
//     })
//     .catch(err => {
//       console.log(err);
//     })
//   }, []);
//   if (loading) {
//     return null
//   }
//   if (!user) {
//     return <Redirect to='/login'/>
//   }
//   return <React.Fragment>
//           <ComponentToProtect {...this.props} />
//         </React.Fragment>
// }

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
      fetch('/checkToken')
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
// export default CheckUser;