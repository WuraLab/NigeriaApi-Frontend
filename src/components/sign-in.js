import React, { Component, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';


class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
            email: '',
            password: '',
            message: ''
        }
      
  
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
