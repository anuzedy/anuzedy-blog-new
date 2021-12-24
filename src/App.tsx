import React from "react";
import "./App.css";
import Blog from "./components/Blog";
import { Route } from "react-router-dom";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={Blog} />
      <Route path="/signup" component={SignUp} />
      <Route path="/signin" component={SignIn} />
    </div>
  );
}

export default App;
