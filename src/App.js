import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Home from '../src/pages/Home'
import Profile from '../src/pages/Profile'
import Login from '../src/pages/Login'
import Signup from '../src/pages/Signup'
import withAuth from './components/withAuth'


function App () {
    return (
    <div className='App'>
      <Router>
        <Route exact path='/' component={Home} />
        <Route path='/login' component={Login} />
        <Route path='/users/profile' component={withAuth(Profile)} />
        <Route path='/signup' component={Signup} />
      </Router>
    </div>
  )
}

export default App
