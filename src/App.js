import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import Home from '../src/pages/Home'
import Profile from '../src/pages/Profile'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
import Ideas from '../src/pages/Ideas';
import decode from 'jwt-decode'
import axios from 'axios'
import CheckUser from '../src/components/withAuth'

// const checkAuth = () => {
//   axios.get('http://localhost:3001/users/profile').then(() => {
//     const token = localStorage.getItem('token');
//     const refreshToken = localStorage.getItem('refreshToken');
//   if (!token || !refreshToken) {
//     return false
//   }
//   try {
//     const { exp } = decode(refreshToken);
//     console.log(exp)
//     console.log(new Date(). getTime() / 1000)
//     if (exp < new Date().getTime() / 1000) {
//       return false
//     } 
//   } catch (e) {
//     return false
//   }
//   return true
//   })
// }



function App () {
    return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/users/profile' component={CheckUser(Profile)} />
        <Route path='/signup' component={Signup} />
        <Route path='/ideas' component={Ideas} />  
      </Router>
    </div>
  )
}

export default App
