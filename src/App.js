import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
import Login from './components/signin/loginn';
import Home from './components/homepage/Home';
// import Header from './components/header/header';
import Footer from './components/footer/footer';
// import LMSMain from './components/lmscourse/lms';
import SignUp from './components/signup/Signup';
class App extends Component{
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
    return (
      <div className="App">
        <SignUp />
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
