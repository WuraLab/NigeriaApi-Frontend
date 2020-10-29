import React, { Component } from "react";
import "./components/auth";

import "./App.css";
import LeftDash from "./components/left-dash";
import Auth from "./components/auth";
import { BrowserRouter, Route, Router, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/dashboard";
import Institution from "./components/institution/institution";
// import Dashboard from "./components/dashboard/dashboard";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
        <Route exact path="/institution" component={Institution}></Route>
          <Route path="/dashboard" component={Dashboard}></Route>
          <Route path="/institution" component={Institution}></Route>
          <Route path="/">
            <div className="App">
              <LeftDash />
              <Auth />
            </div>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

// /// App.js
// //<header/>
// <Route exact path="/" component={SignUpForm}>
// </Route>
// <Route path="/sign-in" component={SignInForm}>
// </Route>
// <Route path="/dashboard" component={dashboard}>
// </Route>
// //<footer/>
