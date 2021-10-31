import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';
import './Login.css';




const Login = () => {
    const {signInUsingGoogle} = useAuth();
    const location = useLocation();
    const redirect_uri = location?.state?.from || '/';
    const history = useHistory();


    const handleGoogleSignIn = () => {
        signInUsingGoogle()
        .then(result => {
            history.push(redirect_uri);
        })
    }


    return (
        <div className="google-login">
            <div className="text-center">
            <h2 className="text-4xl font-bold my-6">Please Login</h2>
            <div>
            <button className="mb-3 google" onClick={handleGoogleSignIn} >Google Sign In</button>
            </div>
            </div>
        </div>
    );
};

export default Login;
