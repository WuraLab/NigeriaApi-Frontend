import React, { Component } from "react";
import { Link, Redirect, Router } from "react-router-dom";
import Axios from "axios";

//helper function for checking validity of form before submitting
// const formValid = ({ formErrors, ...rest }) => {
//   //initial state of valid form
//   let valid = true;

//   //checks to see the error object has any value greater than zero which implies that an error exists and renders the for invalid
//   Object.values(formErrors).forEach((val) => val.length > 0 && (valid = false));

//   //checks to see if any input has  been made to the form.form is invalid if not
//   Object.values(rest).forEach((val) => {
//     val === null && (valid = false);
//   });
//   return valid;
// };
///-------------------------------------------------------

//regex for checking email validity
const emailRegex = RegExp(
  /^([a-zA-Z0-9_\-.]+)@([a-zA-Z0-9_\-.]+)\.([a-zA-Z]{2,5})$/
);
class SignUpForm extends Component {
  constructor() {
    super();
    // state variables
    this.state = {
      username: "",
      email: "",
      password: "",
      confirm: "",
      message: "",
      //error object
      formErrors: {
        username: "",
        email: "",
        password: "",
        confirm: "",
      },
    };
  }
  //handles form submission
  handleSubmit = async (e) => {
    console.log("sign up btn clicked");
    e.preventDefault();

    const user = {
      email: this.state.email,
      username: this.state.username,
      password: this.state.password,
      confirmPassword: this.state.confirm,
    };

    // if (formValid(this.state)) {
    //   console.log(
    //     `email:${this.state.email}
    //     username: ${this.state.username}
    //     password:${this.state.password}
    //     confirmPassword:${this.state.confirm}`
    //   );
    // } else console.error("form invalid");


    
    await Axios.post(
      `https://nigeria-api-backend.herokuapp.com/api/v1/users/`,
      { ...user }
    ).then(
      (res) => {
        console.log(res);
        if (res.status === 201) return this.props.history.push("/sign-in");
        // else return an error of username or password is incorrect
        else if (res.status >= 400 && res.status <= 500) {
          console.log(" is incorrect");
          return this.setState({
            message: "Email or password is incorrect",
          });
        } else {
          return this.setState({
            message:
              "Something went wrong! Please check your network connection.",
          });
        }
      },
      (error) => {
        console.log(error);
        return this.setState({
          message:
            "Something went wrong! Please check your network connection.",
        });
      }
    );
    };
  


  //validation for input types
  handleChange = (e) => {
    e.preventDefault();
    //get the name of the input type and the current state value of it
    const { name, value } = e.target;
    //clone the error object
    let formErrors = this.state.formErrors;

    // validation conditions for various input types
    switch (name) {
      case "username":
        formErrors.username =
          value.length < 3 ? "minimum of three characters required" : "";
        break;
      case "email":
        formErrors.email = emailRegex.test(value)
          ? ""
          : "invalid email address";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "Minimum of six characters required" : "";
        break;
      case "confirm":
        formErrors.confirm =
          this.state.password === value ? "" : "Does not match password";
        break;
      default:
        break;
    }

    //----------------------------------------------
    //update state with formErrors if any and values
    if (
      formErrors.username ||
      formErrors.email ||
      formErrors.password ||
      formErrors.confirm
    ) {
      this.setState({ formErrors, [name]: value });
    } else {
      this.setState({ [name]: value });
    }
  };
  render() {
    //get for errors to be displayed
    const { formErrors } = this.state;
    return (
      <div className="FormCenter">
        <form onSubmit={this.handleSubmit} className="FormFields">
          {/* error handler message */}
          {this.state.message && (
            <div
              className="alert alert-danger alert-dismissible fade show"
              role="alert"
            >
              {this.state.message}
              <button
                type="button"
                className="close"
                onClick={this.clearError}
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
          )}

          <div className="FormField">
            <label className="FormField__Label" htmlFor="name">
              Username
            </label>
            <input
              type="text"
              id="name"
              className="FormField__Input"
              placeholder="Enter your username"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
            {formErrors.username.length > 0 && (
              <span className="errormessage">{formErrors.username}</span>
            )}
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="email">
              E-Mail Address
            </label>
            <input
              type="email"
              id="email"
              className="FormField__Input"
              placeholder="Enter your email"
              name="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
            {formErrors.email.length > 0 && (
              <span className="errormessage">{formErrors.email}</span>
            )}
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className="FormField__Input"
              placeholder="accepts both lower and upper case letter, number and special character"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
            {formErrors.password.length > 0 && (
              <span className="errormessage">{formErrors.password}</span>
            )}
          </div>

          <div className="FormField">
            <label className="FormField__Label" htmlFor="password">
              Confirm Password
            </label>
            <input
              type="password"
              id="confirm"
              className="FormField__Input"
              placeholder="Confirm Password"
              name="confirm"
              value={this.state.confirm}
              onChange={this.handleChange}
            />
            {formErrors.confirm.length > 0 && (
              <span className="errormessage">{formErrors.username}</span>
            )}
          </div>

          <div className="FormField">
            <button type="submit" className="FormField__Button mr-20">
              Sign Up
            </button>{" "}
            <Link to="/sign-in" className="FormField__Link">
              I'm already member
            </Link>
          </div>
        </form>
      </div>
    );
  }
}
export default SignUpForm;
