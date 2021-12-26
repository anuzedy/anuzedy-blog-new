import React from "react";
import "./App.css";
import Blog from "./components/Blog";
import { Route, Switch } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Dashboard from "./components/Dashboard";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Blog} />
        <Route path="/signup" component={SignUp} />
        <Route path="/signin" component={SignIn} />
        <Route path="/board" component={Dashboard} />
      </Switch>
    </div>
  );
}

export default App;
