import React from "react";
import { useState} from "react";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom"



const ProfilePage = () => {
    const [isAuthenticated, setIsAuthenticated] = useState (false)
    const [profile, setProfile] = useState  ({
        name: '',
        email: '',
        number: '' ,
    });

const handleChange = (e) => {
    setProfile({
        ...profile,
        [e.target.name]: e.target.value,
    });
};

return (
    <div className = "Profile-picture">
        <img
        className = "rounded w-32 h-32"
    src = "5472d1b09d3d724228109d381d617326.jpeg"
        alt= "5472d1b09d3d724228109d381d617326.jpeg"
        /> 
       
  

    <div className = "text-left w-full max-w-sm">

        <input type = "text"
        name = "name"
        value = {profile.name}
        onChange = {handleChange}
        />
        
     <input type = "text"
        name = "email"
        value = {profile.email}
        onChange = {handleChange}
        />
    </div>
    </div>
);
}

export default ProfilePage;