import React, {Component, Fragment} from 'react';

import TextField from '@material-ui/core/TextField';
import './loginn.css';
import './nav.css';
import Button from '@material-ui/core/Button';
export class Login extends Component{
    render(){
        return(
                   
           <div className="form" >
               <div className="heading12">
                   <h2>Login</h2>
                   <hr/>
                   <p>Welcome Back!</p>
                   <br/>
                   <p className="forget">Did You<span><a> Forgot Your Password ?</a> </span></p>
               
           </div>
           <div className="input1">
           <TextField id="standard-basic" label="UserName" /></div>
           <br/>
           <div className="input2">
           <TextField id="standard-basic" label="Password" /></div>
           <br/>
           <div className="btn">
           <Button variant="contained" className="btn"><span id="text">
 CONTINUE</span>
</Button>
           </div>
           </div>
          
        
           
        );

    }
}