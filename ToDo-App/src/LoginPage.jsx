import React from "react";
import { useState } from "react";
import { useEffect } from "react";


const LoginPage = () => {
    const [formData, setFormData] = useState ({name:'', number:'', email:''});
    

    setFormData(prevState => ({ ...prevState, [name]:value}))
    setFormData(prevState => ({ ...prevState, [number]:value}))
    setFormData(prevState => ({ ...prevState, [email]:value}))


const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
}

return (
    <form onSubmit={handleSubmit}>
        <input
        type='text'
        name='name'
        value={formData.name}
        onChange={handleChange}
/>

<input
type='number'
name='number'
value={formData.number}
onChange={handleChange}
/>

<input
type='text'
name='email address'
value={formData.name}
onChange={handleChange}
/>

<button type='submit'>Login</button>
    </form>
)

}
export default LoginPage;