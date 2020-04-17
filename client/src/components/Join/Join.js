import React, { useState } from 'react';
import { Link } from "react-router-dom";
import { useAuth0 } from "../../react-auth0-spa";

import './Join.css';

export default function SignIn() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const {isAuthenticated} = useAuth0();

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">

        
        <h1 className="heading">Join a Room!</h1>
        <div>
          
          <input placeholder="Nickname" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} />
        </div>
        <div>
          <input placeholder="Room Name" className="joinInput mt-20" type="text" onChange={(event) => setRoom(event.target.value)} />
        </div>
        <Link onClick={e => (!name || !room || !isAuthenticated) ? e.preventDefault() : null} to={`/chat?name=${name}&room=${room}`}>
          <button className="button2 mt-20" type="submit">Join a Room!</button>
        </Link>
      </div>
    </div>
  );
}
