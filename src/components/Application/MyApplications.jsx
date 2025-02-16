import React, { useEffect, useState } from 'react';

const MyApplications = () => {
    const [applications, setApplications] = useState([]);

    useEffect(() => {
        // Retrieve applications from localStorage
        const savedApplications = JSON.parse(localStorage.getItem('applications')) || [];
        setApplications(savedApplications);
    }, []);

    return (
        <div className="myapplications-container">
            <h2>𝐌𝐲 𝐀𝐩𝐩𝐥𝐢𝐜𝐚𝐭𝐢𝐨𝐧𝐬</h2>
            {applications.length > 0 ? (
                <ul className="application-list">
                    {applications.map((app) => (
                        <li key={app.id} className="application-item">
                            <span>{app.name} - {app.email} (Resume: {app.resume})</span>
                            <span className={`application-status ${app.status.toLowerCase() === 'pending' ? 'status-pending' : 'status-reviewed'}`}>
                                {app.status}
                            </span>
                        </li>
                    ))}
                </ul>
            ) : (
                <p>No applications submitted yet.</p>
            )}
        </div>
    );
};

export default MyApplications;