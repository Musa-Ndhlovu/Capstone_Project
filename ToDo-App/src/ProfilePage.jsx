import React from "react";
import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import './index.css'


const ProfilePage = () => {
  const navigate = useNavigate();

  
  const [profile, setProfile] = useState({
    name: "Musa Ndhlovu",
    email: "Musa.example@gmail.com",
    gender: "female",
    number: " "
  })

  
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setProfile({ ...profile, [e.target.name]: e.target.value });
  }

  
  const toggleEditMode = () => {
    setIsEditing(!isEditing);
  }

  const saveProfile = () => {
    setIsEditing(false);
    console.log("Profile saved:", profile);
  }


  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 p-6">
      

      {/*images still needs to be centered and large and image still does not show*/}
      <div className="relative flex items-center">
        <img
          src="5472d1b09d3d724228109d381d617326.jpeg" 
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-gray-500 shadow-md" />
      </div>

      {/*Profile details*/}

      {isEditing ? (
        <div className="text-left w-full max-w-sm mt-4">

<input type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-2"/>

 <input type="text"
            name="email"
            value={profile.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md mb-2"/>

 <input type = "text"
          name = "gender"
          value = {profile.gender}
          onChange = {handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"/>

<input type = "number"
          name = "number"
          value = {profile.number}
          onChange = {handleChange}
          className="w-full p-2 border border-gray-300 rounded-md"/>

     </div>

      ) : (
        <div className="text-left w-full max-w-sm mt-4">
          <h1 className="text-2xl font-bold">{profile.name}</h1>
          <p className="text-gray-600">{profile.email}</p>
          <p className = "text-gray-600">{profile.gender}</p>
          <p className = "text-gray-600">{profile.number}</p>
        </div>
      )
      }

      {/* MY BUTTONS*/}
      <button
        onClick={toggleEditMode}
        className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-700 transition">
        {isEditing ? "Cancel" : "Edit Profile"}
      </button>

      {isEditing && (
        <button
          onClick={saveProfile}
          className="mt-2 px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-700 transition">
          Save Profile</button>
      )}

      <button
        onClick={() => navigate("/home")}
        className="mt-2 px-4 py-2 bg-gray-400 text-white rounded-lg hover:bg-gray-600 transition">
        Back to Homepage</button>

<br /> <br />

      <button 
      onClick = {() => navigate("/")}
      className="mt-2 px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-700 transition">
        Logout</button>
    </div>
  )
}

export default ProfilePage;
