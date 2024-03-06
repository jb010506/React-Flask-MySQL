import React, { useState, useEffect } from 'react';

export function Profile() {
    const [profile, setProfile] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                const storedUser = localStorage.getItem('user');
                const profile = data.find(user => user.username === storedUser)
                setProfile(profile);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    return (
        <div>
            <h2>Profile</h2>
            <ul>

                <li>
                    <strong>ID: </strong> {profile.id}
                </li>

                <li>
                    <strong>User Name: </strong> {profile.username}
                </li>
                <li >
                <strong>First Name: </strong> {profile.firstname}

                </li>
                <li>
                <strong>Last Name: </strong> {profile.lastname}
                </li>

                <li>
                <strong>Email: </strong> {profile.email}
                </li>

            </ul>
        </div>
    );
}
