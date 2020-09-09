import React, { Component } from "react";
import { HashRouter as Router, Route, NavLink } from "react-router-dom";
// import "../App.css";

class LeftDash extends Component {
  render() {
    return (
      <div className="App__Aside">
        <div className="header">
          <h1>WELCOME TO NIGERIA API</h1>
          <p>A Collections of API'S about everything Nigeria</p>
        </div>
        <h3>Checkout some of our popular Api's</h3>

        <h3>
          <a href="#">Nigeria Universities Data</a>
        </h3>
        <h3>
          <a href="#">Wonderful Landscapes in Nigeria</a>
        </h3>
        <h3>
          <a href="#">List of Indegenous Banks and Commerce Home</a>
        </h3>
      </div>
    );
  }
}
export default LeftDash;
