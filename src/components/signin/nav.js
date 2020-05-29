import React, {Component} from 'react';

import './nav.css';
// import   './logo.png';



export class Navbarr extends Component{
  render(){
    return(
      <div id="main">
        <nav>
          {/* <img src="logo.png"/> */}
          <ul>
            <li><a href="#">Home</a></li>
            <li><a href="#">Learn More</a></li>
            <li><a href="#">Sign Up</a></li>
            <li><a href="#">Blog</a></li>
          </ul>
        </nav>
      </div>

    );

  }

}