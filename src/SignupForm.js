// SignupForm.js
import React, { useState } from 'react';

const SignupForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [picture, setPicture] = useState(null); 

    const handleSubmit = async (event) => {
        event.preventDefault();
        
        try {
            const formData = new FormData();
            formData.append('name', name);
            formData.append('email', email);
            formData.append('password', password);
            formData.append('pic', picture); // Append the picture file to the form data

            const response = await fetch("/signup", {
                method: "POST",
                body: formData // Use form data instead of JSON.stringify for multipart/form-data
            });

            if (response.ok) {
                // Signup successful, handle accordingly (redirect, show success message, etc.)
                console.log("Signup successful");
            } else {
                // Signup failed, handle accordingly (show error message, clear form fields, etc.)
                console.error("Signup failed");
            }
        } catch (error) {
            console.error("Signup failed:", error);
        }
    };

    const handlePictureChange = (event) => {
        const file = event.target.files[0];
        setPicture(file);
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
            <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} required />
            <input type="file" onChange={handlePictureChange} accept="image/*" /> {/* Accept only image files */}
            <button type="submit">Signup</button>
        </form>
    );
};

export default SignupForm;
