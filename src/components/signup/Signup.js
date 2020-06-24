import React, { Component } from "react";
import "./signup.css";
import { FontAwesomeIcon } from "react-fontawesome";
import { faEye } from 'react-fontawesome';
import fire from "../../config/fire";
import firebase from 'firebase';
import Login from '../signin/Login';
import { Route, Link, BrowserRouter } from 'react-router-dom'
import LogoKodate from './img/logoKodate.svg'
import Google from './img/google.svg'
import FaceBook from './img/icons.svg'
import Arrow from './img/arrow.svg'
import Navbeforelogin from "../signin/navbeforelogin";

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
  constructor(props)
    {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email : "",
            password : "",
            name:"",
            mobile:" "
        }
    }
    Gsignin(){
      var base_provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(base_provider).then((res)=>{console.log('success!!');
  console.log(res);
      alert('success');
  })
      .catch((error)=>{
          console.log('failed!!');
          console.log(error);})
  }

  facebookSignin() {
    var provider = new firebase.auth.FacebookAuthProvider();

    firebase.auth().signInWithPopup(provider)
    
    .then(function(result) {
       var token = result.credential.accessToken;
       var user = result.user;
     
       console.log(token)
       console.log(user)
    }).catch(function(error) {
       console.log(error.code);
       console.log(error.message);
    });
 }
  
    login(e){
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    signup(e){
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email,this.state.password).then((u)=>{
            console.log(u)
        }).catch((err)=>{
            console.log(err);
        })
    }
    handleChange(e){
        this.setState({
            [e.target.name] : e.target.value
        })
    }
    

  render() {
    const { formErrors } = this.state;

    return (
      <div className="wrapper">
        <div className="logoDivSignUp">
          <img src={LogoKodate} alt="LogoKodate" />
          {/* <div><Navbeforelogin /></div> */}
        </div>
        <div className="formOuterDiv">
        <div className="form-wrapper">
          <h1>Sign Up</h1>
          <hr className="signupunderline" />
          <form onSubmit={this.handleSubmit} noValidate>
            <div className="firstName">
                <input
                // className={formErrors.name.length > 0 ? "error" : null}
                placeholder="Name"
                type="text"
                name="firstName"
                noValidate
                value={this.state.name}

                onChange={this.handleChange}
              />
              {/* {formErrors.name.length > 0 && (
                <span className="errorMessage">{formErrors.name}</span>
              )} */}
            </div>
            <div className="mobile">
              <input
                type="tel"
                name="mobile"
                noValidate
                id="mobile"
                value={this.state.mobile}
                placeholder="Mobile"
                onChange={this.handleChange}
              />
              
            </div>
            <div className="email">
              <input
                // className={formErrors.phoneNo.length > 0 ? "error" : null}
                type="email"
                id="email"
                name="email"
                placeholder="Enter email address"
                onChange={this.handleChange}
                value={this.state.email}
              />
              {/* {formErrors.phoneNo.length > 0 && (
                <span className="errorMessage">{formErrors.phoneNo}</span>
              )} */}
            </div>
            <div className="password">
              <input
                // className={formErrors.password.length > 0 ? "error" : null}
                name="password"
                type= "password"
                onChange={this.handleChange}
                id="password"
                placeholder="Enter password"
                value={this.state.password}
              />
              {/* {formErrors.password.length > 0 && (
                <span className="errorMessage">{formErrors.password}</span>
              )} */}
            </div>
            <br />
            <div className="createAccount">
              <button  type="submit" onClick={this.signup}><img src={Arrow} alt="Google" /> &nbsp; CONTINUE</button>
              </div>
              <br />
              <div className="orDiv">
                <hr /> &nbsp; OR &nbsp; <hr />
              </div>
              <div className="alternate">
              {/* <Route path="../signin/Login" component={Login} />  */}
               <div>
                <button className="google" onClick={this.Gsignin}  type="button"><img src={Google} alt="Google" /> &nbsp; Sign Up with Google</button>
                 </div>
                 <div>
                 <button className="facebook" onClick={this.FBsignin} type="submit"><img src={FaceBook} alt="Google" /> &nbsp; Sign Up with Facebook</button>

                 </div>
              </div>

            
          </form>
        </div>
        </div>
      </div>
    );
  }
}

export default SignUp;