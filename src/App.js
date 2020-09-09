import React, { Component } from "react";
import "./components/auth";

import "./App.css";
import LeftDash from "./components/left-dash";
import Auth from "./components/auth";

class App extends Component {
  render() {
    return (
      <div className="App">
        <LeftDash />
        <Auth />
      </div>
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
