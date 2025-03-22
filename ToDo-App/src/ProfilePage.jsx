import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";



const Profile = () => {
    const [isAuthenticated, setIsAuthenticated] = useState
    const [profile, setProfile] = useState ({
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
    <div className = 'rounded w-32 h-32'
    src = "5472d1b09d3d724228109d381d617326.jpeg"
        alt= "5472d1b09d3d724228109d381d617326.jpeg"
        /> 
    /div>

    <div className = "text-left w-full max-w-sm">

        <input type = "text"
        name = "name"
        value = {profile.name}
        onchange = {handleChange}
        />
        
     <input type = "text"
        name = "email"
        value = {profile.email}
        onchange = {handleChange}
        />
    </div>
);
}
export default ProfilePage;