// import { getAuth, signInWithPopup, onAuthStateChanged, 
//     GoogleAuthProvider, signOut } from "firebase/auth";
// import { useEffect, useState } from 'react';
// import initializeAuthentication from "../Firebase/firebase.init";


// initializeAuthentication();

// const useFirebase = () => {
//     const [user, setUser] = useState({});
//     console.log(user);
//     const [isLoading, setIsLoading] = useState();

//     const auth = getAuth();
//     const googleProvider = new GoogleAuthProvider();

//     //---------------Google Sing In------------------
//     const signInUsingGoogle = () => {
//         setIsLoading(true);
//         signInWithPopup(auth, googleProvider)
//         .finally( () => setIsLoading(false));
//     }

//     //----------------Log Out-------------------------
//     const logOut = () => {
//         setIsLoading(true);
//         signOut(auth)
//         .then( () => { } )
//         .finally( () => setIsLoading(false));
//     }

//     useEffect( () => {
//         onAuthStateChanged(auth, (user) => {
//             if(user) {
//                 setUser(user);
//             }
//             else {
//                 setUser({});
//             }
//             setIsLoading(false);
//         })
//     }, [])

//     return (
//         user,
//         isLoading,
//         signInUsingGoogle,
//         logOut
//     );
// };

// export default useFirebase;

import { getAuth, signInWithPopup, GoogleAuthProvider, 
    signOut, onAuthStateChanged, signInWithEmailAndPassword, 
    createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { useEffect } from "react";
import initializeAuthentication from "../Firebase/firebase.init";

initializeAuthentication();


const useFirebase = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLoading, setIsLoding] = useState(true);
    const [user, setUser] = useState({});
    const [error, setError] = useState('');

    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    // -----------------------Google sign In -------------------------
    const signInUsingGoogle = () => {
        setIsLoding(true);
      return signInWithPopup(auth, googleProvider)
    .finally(() => setIsLoding(false));
    }
// -----------------------getting use name, email and password --------
    const handleNameChange = e => {
        setName(e.target.value);
    }
    const handleEmailChange = e => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = e => {
        setPassword(e.target.value);
    }
    
    // -----------------------handling login -------------------------

    const userLogin = (email, password) => {
       return signInWithEmailAndPassword(auth, email, password)
       
     }
    
    const handleLogin = (event) => {
            event.preventDefault();
           return userLogin(email, password);
        }
// -----------------------create new user -------------------------

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setUser(result.user);
                updateUser();
                userLogin(email, password);
            })
            .catch(error => {
                setError(error.message);
            })
    }

    // -----------------------sign in new user -------------------------
    const handleRegistration = (e) => {
        e.preventDefault();
       return createUser(email, password);
    }

    const updateUser = () => {
        updateProfile(auth.currentUser, {
            displayName: name
        })
        .then(result => {

        })
    }

    // -----------------------log out ----------------------------------
        const logOut = () => {
            setIsLoding(true);
            signOut(auth)
            .then(() => { } )
                .finally(() => setIsLoding(false));
            }

    useEffect( () => {
      onAuthStateChanged(auth, (user) => {
            if(user) {
                setUser(user);
            }
            else {
                setUser({});
            }
            setIsLoding(false);
        });
    }, [])


    return {
        user,
        error,
        isLoading,
        signInUsingGoogle,
        handleEmailChange,
        handlePasswordChange,
        handleNameChange,
        handleRegistration,
        userLogin,
        logOut,
        handleLogin,
        email,
        password
    }
}

export default useFirebase;