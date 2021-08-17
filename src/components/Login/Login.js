import React, { useContext } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from '../firebaseConfig/firebase.config'
// import { useState } from 'react/cjs/react.development';
import login from '../../images/login.png';
import { UserContext } from '../../App';
import { useHistory, useLocation } from 'react-router-dom';




 const Login = () => {

//   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
//   const history = useHistory();
//   const location = useLocation();
//   const { from } = location.state || { from: { pathname: "/" } };

// //   const [loggedInUser, setLoggedInUser] = useContext(UserContext);
// //   console.log(loggedInUser)
// // const history = useHistory();
// // const location = useLocation();
// // const { from } = location.state || { from: { pathname: "/" } };
 
// if (firebase.apps.length === 0) {
//       firebase.initializeApp(firebaseConfig);
//     }
// const provider = new firebase.auth.GoogleAuthProvider();
//   const handleGoogleSignIn = () => {
   
//     firebase.auth()
//       .signInWithPopup(provider)
//       .then((result) => {
//         const { displayName, email } = result.user;
//         const signedInuser = { name: displayName, email };
//         console.log(signedInuser);
//         setLoggedInUser(signedInuser);
//     history.replace(from);
//         console.log(loggedInUser)
      

//         // ...
//       }).catch((error) => {
//         console.log(error.message);
        
//         // ...
//       });

      
//     }
const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const history = useHistory();
  const location = useLocation();
  const { from } = location.state || { from: { pathname: "/" } };

  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }
  const provider = new firebase.auth.GoogleAuthProvider();
  const handleGoogleSignIn = () => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then(function (result) {
        const { displayName, email, photoURL } = result.user;
        const signedInUser = { name: displayName, email, image: photoURL };
        setLoggedInUser(signedInUser);
        history.replace(from);
      })
      .catch(function (error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        var email = error.email;
        var credential = error.credential;
        // ...
      });
  };
   

  return (
    <div>
      <div className="row align-items-center" >
        <div className="col-md-6  p-5 ">
          <div className="w-75 offset-1 shadow p-5">
            <p className="text-center">Login</p>
            <div className="form-group">
              <label htmlFor="">User name</label>
              <input type="text" className="form-control"></input>
            </div>
            <div className="form-group">
              <label htmlFor="">Password</label>
              <input type="password" className="form-control"></input>
            </div>

            <div className="form-group pt-3">
              <label htmlFor="" className="text-danger">Forgot your password?</label>
            </div>

            <div className="form-group pt-3">
              <button onClick={handleGoogleSignIn} className="button btn">Google Sign in</button>
            </div>
          </div>
        </div>
        <div className="col-md-6 ">
          <img src={login} alt="" className="img-fluid" style={{height:'90vh',transform:'translateX(60px)'}}></img>
        </div>
      </div>


    </div>
  );
};
  

export default Login;



