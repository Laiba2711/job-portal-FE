import React, { useState } from 'react';

const Application = () => {
    const [formData, setFormData] = useState({ name: '', email: '', resume: '' });

    const handleChange = (e) => {
        const { name, value, type, files } = e.target;
        setFormData({ 
            ...formData, 
            [name]: type === 'file' ? files[0].name : value 
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Get existing applications from localStorage
        const existingApplications = JSON.parse(localStorage.getItem('applications')) || [];
        
        // Add new application
        const newApplication = { ...formData, id: Date.now(), status: 'Pending' };
        const updatedApplications = [...existingApplications, newApplication];
        
        // Save to localStorage
        localStorage.setItem('applications', JSON.stringify(updatedApplications));

        alert('Application submitted successfully!');
        
        // Reset form
        setFormData({ name: '', email: '', resume: '' });
    };

    return (
        <div className="application-container">
            <h2>𝐉𝐨𝐛 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧</h2>
            <form className="application-form" onSubmit={handleSubmit}>
                <input type="text" name="name" value={formData.name} placeholder="Your Name" onChange={handleChange} required />
                <input type="email" name="email" value={formData.email} placeholder="Your Email" onChange={handleChange} required />
                <input type="file" name="resume" onChange={handleChange} required />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
};

export default Application;