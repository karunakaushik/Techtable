import React, {Component} from 'react';
import fire from ".././../config/fire";
import navafterlogin from './navafterlogin';
import navbeforelogin from './navbeforelogin';
import './nav.css';
class Navbarr extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  componentDidMount()
  {
    this.authListener();
  }
  authListener(){
    fire.auth().onAuthStateChanged((user)=>{
      if(user)
      {
        this.setState({user})
      }
      else{
        this.setState({user : null})
      }
    })
  }

  render(){
      
        return(
          <div id="Navbarr">
                    {this.state.user ? (<navafterlogin/>) : (<navbeforelogin/>)}

          </div>
    
        );
      
    

  }

}

export default Navbarr;