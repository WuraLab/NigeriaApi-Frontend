import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import {useCookies} from 'react-cookie'
// import { API } from '../api-service'
// loginuser
// signinuser
// get uni data
// get states data


// export class API {
//   static loginUser(body) {
//     return new Promise((resolve, reject)=> {
//     fetch(` https://rate-movie-api.herokuapp.com/auth/`,
//     {
//         method:'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body)
//       })
//       .then((resp)=>{
//         resolve( resp.json())
//       })
//     }) 
//   }
//   static registerUser(body) {
//     return new Promise((resolve, reject)=> {
//     fetch(`https://rate-movie-api.herokuapp.com/api/users/`,
//     {
//         method:'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSON.stringify(body)
//       })
//       .then((resp)=>{
//         resolve( resp.json())
//       })
//     }) 
//   }

// }

// import {API} from './api-service'
// API.loginUser().then(()=>{//redirect}).catch(()=>{//catching errors})

class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            message: ''
        }
      
  //       const [token, setToken] = useCookies(['Auth-token']);

  //   useEffect(() => {
  //     console.log(token['Auth-token']);
  //     if(token['Auth-token']) window.location.href = "/dashboard";
  // },[token])
  //   const loginClicked = () => {
  //     API.loginUser({state.email, state.password})
  //     .then((resp) => setToken('Auth-token', resp.token) )
  //     .catch((err) => console.log(err))
  // }
   }

    

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
      }

      handleSubmit = e => {
        e.preventDefault()
        const { email, password } = this.state
        if (!email && !password) {
          this.setState({ message: 'All field are required' })
          return
        }
        console.log('submitting')
      }
    
      clearError = () => {
        this.setState({ message: '' })
      }

      render(){
     return(
        <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields" onSubmit={this.handleSubmit}>
        {this.state.message && (
              <div
                className='alert alert-danger alert-dismissible fade show'
                role='alert'
              >
                {this.state.message}
                <button
                  type='button'
                  className='close'
                  onClick={this.clearError}
                  aria-label='Close'
                >
                  <span aria-hidden='true'>&times;</span>
                </button>
              </div>
            )}
        <div className="FormField">
            <label className="FormField__Label" htmlFor="email">E-Mail Address</label>
            <input type="email" id="email" className="FormField__Input" placeholder="Enter your email" name="email" value={this.state.email} onChange={this.handleInputChange} />
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">Password</label>
            <input type="password" id="password" className="FormField__Input" placeholder="Enter your password" name="password" value={this.state.password} onChange={this.handleInputChange} />
          </div>

          <div className="FormField">
              <button className="FormField__Button mr-20">Sign In</button> <Link to="/" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
     )
     }
      
}
export default SignInForm
