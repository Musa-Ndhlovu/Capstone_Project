import { useState } from 'react'
import './App.css'
import React from 'react'
import {Link} from 'react-router-dom'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'



function App() {

  const [isAuthenticates, setIsAuthenticated] = useState (false)

 return(
   <div>
<HomePage />
<ProfilePage />

<h1> TDL & Schedules</h1>

<nav>

 <ul>
  <li> <Link to = "HomePage"></Link></li>
   <li><Link to = "LoginPage"></Link></li>
   <li><Link to = "ProfilePage"></Link></li>
 </ul>

</nav>


 
    </div>
 )

}

export default App
