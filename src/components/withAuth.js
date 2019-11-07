import React, { useState } from 'react';
import axios from 'axios';

function WithAuth () {
  const [ proceed, setProceed ] = useState(false)
  axios.get('http://localhost:3001/checkToken')
    .then(res => {
      if (res.status === 200) {
        setProceed(true)
      } else {
        const error = new Error(res.err);
        throw error;
      } 
    })
    .catch(err => {
      console.error(err)
    })
}

export default WithAuth

// export default function withAuth(ComponentToProtect) {
//   return class extends Component {
//     constructor() {
//       super();
//       this.state = {
//         loading: true,
//         redirect: false,
//       };
//     }
//     componentDidMount() {
//       fetch('http://localhost:3001/checkToken')
//         .then(res => {
//           if (res.status === 200) {
//             this.setState({ loading: false });
//           } else {
//             const error = new Error(res.error);
//             throw error;
//           }
//         })
//         .catch(err => {
//           console.error(err);
//           this.setState({ loading: false, redirect: true });
//         });
//     }
//     render() {
//       const { loading, redirect } = this.state;
//       if (loading) {
//         return null;
//       }
//       if (redirect) {
//         return <Redirect to="/login" />
//       }
//       return (
//         <React.Fragment>
//           <ComponentToProtect {...this.props} />
//         </React.Fragment>
//       );
//     }
//   }
// }

