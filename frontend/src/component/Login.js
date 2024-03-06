import React, { useState } from 'react';
import { Container, Form, Button } from 'react-bootstrap';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();

        const response = await fetch('http://127.0.0.1:5000/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ username, password }),
        });

        if (!response.ok) {
            throw new Error('Login failed');
        }

        const data = await response.json();
        window.location.href='/profile';
        localStorage.setItem('user', username)
    };


    return (
        <Container className="mt-5">
            <h2>Login</h2>
            <Form onSubmit={handleLogin}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>Username</Form.Label>
                    <Form.Control
                        type="username"
                        placeholder="Enter username"
                        value={username}
                        onChange={(event) => setUsername(event.target.value)}
                        style={{ width: '300px',marginBottom: '10px' }}
                        required
                    />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={(event) => setPassword(event.target.value)}
                        style={{ width: '300px', marginBottom: '10px'}}
                        required
                    />
                    
                </Form.Group>

                <Button variant="primary" type="submit" style={{marginBottom: '10px'}}>
                    Login
                </Button>
            </Form>

            <small>
                Don't have an account? <a href="/signup">Sign up</a>
            </small>
        </Container>
    );
}


export default Login;
