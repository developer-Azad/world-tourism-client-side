import React from 'react';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../hooks/useAuth';




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
        <div>
            <button>signin</button>
            <div>
            <h2>Login page</h2>
            <div>-----------------or----------------</div>
            <button onClick={handleGoogleSignIn} >Google Sign In</button>
            </div>
        </div>
    );
};

export default Login;
