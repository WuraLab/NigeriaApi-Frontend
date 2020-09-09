import React, { Component } from 'react';
import SignUpForm from './sign-up';
import SignInForm from './sign-in';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom';
import {CookiesProvider} from 'react-cookie'


// import './App.css';

class Auth extends Component {
  render() {
    return (
      <CookiesProvider>
        <Router basename="/9ja-api/">
    
            
            
            <div className="App__Form">
              <div className="PageSwitcher">
                  <NavLink to="/sign-in" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign In</NavLink>
                  <NavLink exact to="/" activeClassName="PageSwitcher__Item--Active" className="PageSwitcher__Item">Sign Up</NavLink>
                </div>
                <div className="FormTitle">
                    <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                </div>
                
                <Route exact path="/" component={SignUpForm}>
                </Route>
                <Route path="/sign-in" component={SignInForm}>
                </Route>
                {/* <Route path="/dashboard" component={dashboard}>
                </Route> */}
            </div>
        
        </Router>
      </CookiesProvider>
    );
  }
}

export default Auth;