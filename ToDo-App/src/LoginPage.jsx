import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BrowserRouter } from "react-router-dom";
import { useNavigate } from "react-router-dom";


const LoginPage = () => {
    const [formData, setFormData] = useState ({name:'', email:''});
    const navigate = useNavigate()
    

const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value}))
}


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);

    navigate("/home")
}

return (

    <div className = "flex items-center justify-center min-h-screen bg-blue-100">
    <form 
    onSubmit={handleSubmit}
    className = "bg-purple p-6 rounded-lg shadow-lg w-96">

    <h2 className = "text-xl font-bold text-center mb-4">Welcome <br/>to <br/> TDL & Schedules</h2>

    <br/>

<label className = "block text-gray-700 font-medium mb-1">Name & Surname</label>
<br/>

        <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
        className = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<br/><br />

<label className = "block text-gray-700 font-medium mb-1">Email Address</label>
<br />

<input
type='text'
name='email'
value={formData.email}
onChange={handleChange}
className = "w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
/>

<br/>
<br />

<button 
type="submit" 
className="w-full bg-blue-500 text-white font-medium py-2 mt-4 rounded-md hover:bg-blue-600 transition duration-300">
 Login
</button>

    </form>
    </div>
)

}
export default LoginPage;