import React from "react";
import { Switch, Route } from "react-router-dom";
import Landing from "./_components/Home/Landing.js";
import Login from "./_components/User/Login.js";
import Signup from "./_components/User/Signup.js";
import Profile from "./_components/Profile/Profile.js";
import "./App.css";
import "semantic-ui-css/semantic.min.css";

function App() {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>

      <Switch>
        <Route path="/login" component={Login} />
      </Switch>

      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>

      <Switch>
        <Route path="/profile" component={Profile} />
      </Switch>
    </div>
  );
}

export default App;
