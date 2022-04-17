
import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import GoogleLogin from '../GoogleLogin/GoogleLogin';

const Register = () => {
    const [email, setRegisterEmail] = useState("");
    const [password, setRegisterPassword] = useState("");
    const [error, setError] = useState("");

    const navigate = useNavigate()

    const [createUserWithEmailAndPassword, user] = useCreateUserWithEmailAndPassword(auth)

    const handleRegisterEmail = (e) => {
        setRegisterEmail(e.target.value)
    }

    const handleRegisterPassword = (e) => {
        setRegisterPassword(e.target.value)

    }

    if (user) {
        navigate('/login')
    }

    const handleRegister = e => {
        e.preventDefault();
        if (password.length < 6) {
            setError('password must be 6 characters or longer')
            return;
        }

        createUserWithEmailAndPassword(email, password)

    }
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center'>Please Register</h2>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" placeholder="Your Name" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onBlur={handleRegisterEmail} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onBlur={handleRegisterPassword} type="password" placeholder="Password" required />
                </Form.Group>
                <p style={{ color: 'red' }}>{error}</p>
                <Button variant="primary mb-2 w-50 mx-auto d-block" type="submit">
                    Submit
                </Button>
            </Form>
            <p className='text-center'>Already have an account? <Link to='/login' className='text-primary pe-auto text-decoration-none' >Please Login</Link></p>
            <GoogleLogin></GoogleLogin>
        </div>
    );
};

export default Register;