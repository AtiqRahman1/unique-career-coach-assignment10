import React from 'react';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import google from '../../images/google.png'

const GoogleLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const navigate = useNavigate();
    let errorElement;
    if (user) {
        navigate('/home')
    }

    if (error) {
        errorElement = <div>
            <p className='text-danger'>Error: {error.message}</p>
        </div>

    }
    return (
        <div>
            <h2 className='text-center'>or</h2>
            {errorElement}
            <div className='d-grid gap-2 col-6 mx-auto'>
                <button onClick={() => signInWithGoogle()} className='btn btn-dark'>
                    <img src={google} alt="" />
                    <span className='px-2'>Google Sign In</span></button>
            </div>
        </div>
    );
};

export default GoogleLogin;