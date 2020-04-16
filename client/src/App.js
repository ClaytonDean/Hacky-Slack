import React from "react";
import NavBar from "./components/NavBar";
import Chat from './components/Chat/Chat';
import Join from './components/Join/Join';
import Splash from './components/splashPage/splash';
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
          <Route path="/" exact component={Splash} />
          <Route path="/join" exact component={Join} />
          <Route path="/chat" component={Chat} />
        <PrivateRoute path="/profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;