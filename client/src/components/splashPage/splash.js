import React from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";


import './splash.css';

export default function SplashPage() {
    const {loginWithPopup } = useAuth0();
 
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">

        <h1 className="heading2">Welcome to Hacky Slack the Realtime Chat App</h1>
        <h1 className="heading">Get Authorized</h1>
        
        <Link  onClick={() => loginWithPopup({})} to={`/join`}>
          <button onClick={() => loginWithPopup({})} className={'button mt-20'} type="submit">Sign In</button>
        </Link>
          
        
      </div>
    </div>
  );
}