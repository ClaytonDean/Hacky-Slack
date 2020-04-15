import React, { useContext } from 'react'; // <-- updated
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import 'bulma/css/bulma.css';
import { Auth0Context } from './contexts/auth0-context'; 

import { BrowserRouter as Router, Route } from "react-router-dom";
function App() {
  const auth0 = useContext(Auth0Context);

const App = () => {
  return (
    <div className="hero is-info is-fullheight">
      <div className="hero-body">
        <div className="container has-text-centered">
          <h1>Click Below!</h1>
          <button onClick={auth0.loginWithRedirect} className="button is-danger">
            Login
          </button>
        </div>
      </div>
    </div>
  );
}
}
export default App;
