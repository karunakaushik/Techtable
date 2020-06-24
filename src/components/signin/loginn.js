import React, {Component, Fragment} from 'react';
import {Navbarr } from './nav';
import TextField from '@material-ui/core/TextField';
import './loginn.css';
import './nav.css';
import Button from '@material-ui/core/Button';
import LogoKodate from './img/logoKodate.svg'
import fire from "../../config/fire";
import Arrow from './img/arrow.svg'


class Login extends Component {
    constructor(props)
    {
        super(props);
        this.login = this.login.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.signup = this.signup.bind(this);
        this.state={
            email : "",
            password : ""
        }
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
    



    render(){
        return(
            <Fragment>
{/*             
             <Fragment>
                 <Navbarr/>
             </Fragment>  */}
             <Fragment>

                 <div className="outerContainer"> 
                 <div className="logoDivSignin">
                    <img src={LogoKodate} alt="LogoKodate" />
                  </div>  
                  <div className="formbox">        
           <div className="form" >
               <div className="heading12">
                   <h2>Login</h2>
                   <hr/>
                   <p>Welcome Back!</p>
                   <br/>
                   <p className="forget">Did You<span><a> Forgot Your Password ?</a> </span></p>
               
           </div>
           <div className="input1">
           <TextField 
           type="email"
           id="email"
           name="email"
           placeholder="enter email address"
           onChange={this.handleChange}
           value={this.state.email}
           /></div>
           <br/>
           <div className="input2">
           <TextField 
           name="password"
           type= "password"
           onChange={this.handleChange}
           id="password"
           placeholder="enter password"
           value={this.state.password}
           /></div>
           <br/>
           <div className="btn">
           <button 
           onClick={this.login}
           ><img src={Arrow} alt="Google" /> &nbsp; CONTINUE</button>
           </div>
           </div>
           </div>
           </div>
         </Fragment>
         </Fragment>
           
        );

    }
}

export default Login;