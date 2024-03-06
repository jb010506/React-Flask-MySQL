import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

function Signup() {
  const [formData, setFormData] = useState({
    firstname: '',
    lastname: '',
    username: '',
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        const response = await fetch('http://127.0.0.1:5000/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(formData)
        });

        if (!response.ok) {
            throw new Error('Signup failed');
        }

        console.log('Signup successful');
        window.location.href='login'
    } catch (error) {
        console.error('Signup error:', error);
    }
};


  return (
    <div className="container">
      <h2>Signup</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="firstname">
          <Form.Label>Firstname</Form.Label>
          <Form.Control
            type="text"
            name="firstname"
            value={formData.firstname}
            onChange={handleChange}
            placeholder="Enter firstname"
            style={{ width: '300px', marginBottom: '10px'}}
            required
          />
        </Form.Group>
        <Form.Group controlId="lastname">
          <Form.Label>Lastname</Form.Label>
          <Form.Control
            type="text"
            name="lastname"
            value={formData.lastname}
            onChange={handleChange}
            placeholder="Enter lastname"
            style={{ width: '300px', marginBottom: '10px'}}
            required
          />
        </Form.Group>
        <Form.Group controlId="username">
          <Form.Label>Username</Form.Label>
          <Form.Control
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            placeholder="Enter username"
            style={{ width: '300px', marginBottom: '10px'}}
            required
          />
        </Form.Group>
        <Form.Group controlId="email">
          <Form.Label>Email</Form.Label>
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Enter email"
            style={{ width: '300px', marginBottom: '10px'}}
            required
          />
        </Form.Group>
        <Form.Group controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Enter password"
            style={{ width: '300px', marginBottom: '10px'}}
            required
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}

export default Signup;
