import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Profile from '../src/pages/Profile'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
// import Admin from '../src/pages/Admin'
import ResponsiveNav from '../src/components/ResponsiveNav'

function App () {
  const navLinks = [
    {
      text: 'Home',
      path: '/',
      icon: 'ion-md-home'
    },
    {
      text: 'Login',
      path: '/login',
      icon: 'ion-md-log-in'
    },
    {
      text: 'Signup',
      path: '/signup',
      icon: 'ion-md-add'
    },
    {
      text: 'Profile',
      path: '/profile',
      icon: 'ion-md-person'
    },
    // {
    //   text: 'Admin',
    //   path: '/admin'
    // }
  ]

  return (
    <div className='App'>
      <Router>
        <ResponsiveNav navLinks={navLinks} />
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/profile' component={Profile} />
        <Route path='/signup' component={Signup} />
      </Router>
    </div>
  )
}

export default App
