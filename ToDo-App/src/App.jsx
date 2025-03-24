import { useState } from 'react'
import './App.css'
import React from 'react'
import {Link} from 'react-router-dom'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
 

 
 const App = () => {

  const [isAuthenticates, setIsAuthenticated] = useState (false)

  return (

    <nav>

    
      <Routes>
      <Route path="/" element={<HomePage />} />
        <Route path = "HomePage" element = {<HomePage />} />
        <Route path = "LoginPage" element = {<LoginPage />} />
        <Route path = "ProfilePage" element = {< ProfilePage />} />
       </Routes>
    
 
</nav>
  )
}


 

export default App
