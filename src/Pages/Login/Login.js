import React, { useContext } from 'react';
import logo from '../../image/logos/logo.png';
import googleIcon from '../../image/icons/google.jpg';
import { userContext } from '../../App';
import { Link, useHistory, useLocation } from 'react-router-dom';
import firebaseConfig from './firebaseConfig';
import './Login.css';
import * as firebase from "firebase/app";
import "firebase/auth";





 



const Login = () => {
    const { loggedInfo } = useContext(userContext);
    const [loggedInUser, setLoggedInUser] = loggedInfo;

    const history = useHistory();
    const location = useLocation();

    let { from } = location.state || { from: { pathname: "/order" } };

    // initializing firebase app
    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }

    // google sign in
    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth().signInWithPopup(provider)
            .then(result => {
                const { displayName, email, photoURL } = result.user;
                const signedInUser = { name: displayName, email, photo: photoURL };
                setLoggedInUser(signedInUser);
                history.replace(from);
            })
            .catch(error => {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.log(errorCode, errorMessage);
            });
    }


    return (
        <div className="container text-center p-5">
            <Link to="/home"><img style={{ width: '200px' }} className='mx-5 pr-5' src={logo} alt="" /></Link>
                
                <div className="login-form border bg-white my-5 mx-auto text-center">
                    <h3 className="login-header">Login With</h3>
                        <div onClick={handleGoogleSignIn} className="row d-flex justify-content-center align-items-center google-button my-4 mx-auto">
                            <img src={googleIcon} alt="" className="img-fluid google-icon" />
                            <span className="login-text py-2">Continue with Google</span>
                        </div>
                    <p>Don't have an account? <Link to='/login'>Create an account</Link></p>
                </div>
        </div>
    );
};

export default Login;