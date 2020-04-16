import React from 'react';
import { Link } from "react-router-dom";

import './splash.css';

export default function SplashPage() {
 
  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">

        <h1 className="heading2">Welcome to Hacky Slack the Realtime Chat App</h1>
        <h1 className="heading">Join a Room!</h1>
        
        
          <button className={'button mt-20'} type="submit">Get User Authorized</button>
        
      </div>
    </div>
  );
}