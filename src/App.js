import React, { Component } from 'react';
import './App.css';
import fire from './config/fire';
// import Header from './components/header/header';
import Footer from './components/footer/footer';
import LMSMain from './components/lmscourse/lms';
import VideoMainPage2 from './components/VideoPages/VideoMainPage2';
import VideoMainPage from './components/VideoPages/videoMainPage';
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
        {/* <SignUp /> */}
         <VideoMainPage2 />
         {/* <VideoMainPage /> */}
        {/* <Login /> */}
      </div>
    );
  }
}

export default App;
