import { useState } from 'react'
import './App.css'

import React from 'react'
import {BrowserRouter as Router, Routes, Route, Redirect, Switch, Link} from 'react-router-dom'
import LoginPage from './components/LoginPage'
import HomePage from './components/HomePage'
import ProfilePage from './components/ProfilePage'

<LoginPage />


function App () {

  const [isAuthenticates, setIsAuthenticated] = useState (false)

 return(
  
    <div>

   <h1> TDL & Schedules</h1>

   <nav>

    <ul>
      <li><Link to = "HomePage"></Link></li>
      <li><Link to = "LoginPage"></Link></li>
      <li><Link to = "ProfilePage"></Link></li>
    </ul>

   </nav>


   <Routes>
  <Route path = "/HomePage" element = {< HomePage setIsAuthenticated = {setIsAuthenticated}/>}>
  </Route>

  <Route path = "," compnents = {HomePage} />
<Route path ="LoginPage" compnents = {LoginPage} />
<Route path = "ProfilePage" compnents = {ProfilePage} />

</Routes>
    </div>
    
  )
}


export default App
