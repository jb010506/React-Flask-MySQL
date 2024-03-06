import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap/';

export function Users() {
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:5000/users')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                console.log('Users:', data);
                setUsers(data);
            })
            .catch(error => {
                console.error('Fetch error:', error);
            });
    }, []);

    const deleteUser = (userId) => {
        fetch(`http://127.0.0.1:5000/deleteUser#${userId}`, {
            method: 'DELETE',
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to delete user');
                }
                // Filter out the deleted user from the users array
                setUsers(prevUsers => prevUsers.filter(user => user.id !== userId));
            })
            .catch(error => {
                console.error('Error deleting user:', error);
            });
    };

    return (
        <Table striped bordered hover style={{ width: '700px', marginBottom: '10px', margin:'5px auto'}}>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Username</th>
                    <th>Email</th>
                    <th>Delete User</th>
                </tr>
            </thead>
            <tbody>
                {users.map(user => (
                    <tr key={user.id}>
                        <td>
                            {user.id}
                        </td>
                        <td>
                            {user.firstname}
                        </td>
                        <td>
                            {user.lastname}
                        </td>
                        <td>
                            {user.username}
                        </td>
                        <td>
                            {user.email}
                        </td>
                        <td>
                            <Button variant="danger" onClick={() => deleteUser(user.id)}>Delete</Button>
                        </td>
                    </tr>
                ))}

            </tbody>
        </Table>
    );
}
