import React from "react";
import NavBar from "./components/NavBar";
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
// New - import the React Router components, and the Profile page component
import { Router, Route, Switch } from "react-router-dom";
import Profile from "./components/Profile";
import history from "./utils/history";
import PrivateRoute from "./components/PrivateRoute";

function App() {
  return (
    <div className="App">
      {/* Don't forget to include the history module */}
      <Router history={history}>
        <header>
          <NavBar />
        </header>
        <Switch>
          <Route path="/" exact component={Join} />
          <Route path="/profile" component={Profile} />
          <Route path="/chat" component={Chat} />
        </Switch>
        <PrivateRoute path="/profile" component={Profile} />
      </Router>
    </div>
  );
}

export default App;