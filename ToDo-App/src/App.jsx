import { useState } from 'react'
import './App.css'
import React from 'react'
import {Link} from 'react-router-dom'

import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LoginPage from './LoginPage'
import HomePage from './HomePage'
import ProfilePage from './ProfilePage'
 

 function App() {
  
  return(
   
 
    <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path = "/profile" element = {<ProfilePage />} />   
      </Routes>


  )
 }


 

export default App
