import React, { Component} from 'react';
import { Link } from 'react-router-dom';
import { API } from '../api-service'
import cookie from 'react-cookies'


class SignInForm extends Component {
    constructor() {
        super();

        this.state = {
          email: '',
          password: '',
          message: '',
          userToken: cookie.load('userToken') || ""
      }

   }
    

    handleInputChange = e => {
        const { name, value } = e.target
        this.setState({ [name]: value })
      }

    handleError = e => {
      new Promise(function(resolve, reject){
        const { email, password } = this.state
        if (!email && !password) {
          this.setState(
            { 
              message: 
              'All field are required' 
            }
            )
         reject("")
        } else {
          resolve()
        }
      })
    }



    onLogin = async (e) =>  {
      e.preventDefault()
      const { email, password } = this.state
      let data = {
        email,
        password
      }
      await API.loginUser(data).then((res) => {
          // mutates the state userToken
          this.setState({ userToken: res.token })
          // saves the sate to a token
          cookie.save('userToken', this.state.userToken, { path: '/' })
          // console.log(cookie.loadAll() )

          // redirect you to the dashboard
          this.props.history.push('/dashboard')

      }).catch(() =>{
        // return error
      })
    

    }
    
      clearError = () => {
        this.setState({ message: '' })
      }

      render(){
     return(
        <div className="FormCenter">
        <form  className="FormFields">
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
              <button className="FormField__Button mr-20" onClick={this.onLogin} > Sign In</button> 
              <Link to="/" className="FormField__Link">Create an account</Link>
          </div>
        </form>
      </div>
     )
     }
      
}
export default SignInForm
