import React, { Component } from "react";
import "./css/signup.css";
import { FontAwesomeIcon } from "react-fontawesome";
import { faEye } from 'react-fontawesome'


const formValid = ({ formErrors, ...rest }) => {
  let valid = true;

  // validate form errors being empty
  Object.values(formErrors).forEach(val => {
    val.length > 0 && (valid = false);
  });

  // validate the form was filled out
  Object.values(rest).forEach(val => {
    val === null && (valid = false);
  });

  return valid;
};

class SignUp extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: null,
      phoneNo: null,
      password: null,
      formErrors: {
        name: "",
        phoneNo: "",
        password: ""
      }
    };
  }

  handleSubmit = e => {
    e.preventDefault();

    if (formValid(this.state)) {
      console.log(`
        --SUBMITTING--
        Name: ${this.state.name}
        phoneNo: ${this.state.phoneNo}
        Password: ${this.state.password}
      `);
    } else {
      console.error("FORM INVALID - DISPLAY ERROR MESSAGE");
    }
  };

  handleChange = e => {
    e.preventDefault();
    const { name, value } = e.target;
    let formErrors = { ...this.state.formErrors };

    switch (name) {
      case "firstName":
        formErrors.name =
          value.length < 3 ? "minimum 3 characaters required" : "";
        break;
      case "phoneNo":
        formErrors.email = 
        value.length < 10 ? "Invalid number" : "";
        break;
      case "password":
        formErrors.password =
          value.length < 6 ? "minimum 6 characaters required" : "";
        break;
      default:
        break;
    }

    this.setState({ formErrors, [name]: value }, () => console.log(this.state));
  };

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="form-wrapper">
          <h1>Sign Up</h1>
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
              <label htmlFor="firstName">Name</label>
              <input
                className={formErrors.name.length > 0 ? "error" : null}
                placeholder= "Name"
                type="text"
                name="firstName"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.name}</span>
              )}
            </div>
            <div className="email">
              <label htmlFor="email">Mobile</label>
              <input
                className={formErrors.phoneNo.length > 0 ? "error" : null}
                placeholder="phoneNo"
                type="phoneNo"
                name="phoneNo"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.phoneNo.length > 0 && (
                <span className="errorMessage">{formErrors.phoneNo}</span>
              )}
            </div>
            <div className="password">
              <label htmlFor="password">Password</label>
              <input
              
                className={formErrors.password.length > 0 ? "error" : null}
                placeholder="Password"
                type="password"
                name="password"
                noValidate
                onChange={this.handleChange}
              />
              {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )}
            </div>
            <div className="createAccount">
              <button type="submit" onClick={this.handleSubmit}>Continue</button>
              <div className="alternate">
              <button className="google" type="submit">with Google</button>
              <button className="facebook" type="submit"> with Facebook</button>
              </div>
              
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default SignUp;