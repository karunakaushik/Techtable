import React, { Component } from 'react';
import './header.css';
class Header extends Component{
  constructor(props)
  {
    super(props);
    this.state={
      user : {}
    }
  }
  
  render(){
    return (
      <div className="Header">
       <header>
	<a href="#" class="logo">Logo</a>
	<ul>
		<li> <a href="#"> Home</a></li>
		<li> <a href="#"> About Us</a></li>
	    <li> <a href="#"> Our Sessions</a></li>
	    <li> <a href="#"> Contact Us</a></li>
</ul>

</header>
      </div>
    );
  }
}

export default Header;
