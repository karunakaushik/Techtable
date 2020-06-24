import React, {Component} from 'react';
import fire from "../../config/fire";

import './nav.css';


class Navafterlogin extends Component {

    constructor(props)
    {
        super(props);
        this.logout = this.logout.bind(this);
        this.state={
            email : "",
            password : ""
        }
    }

    logout(){
        fire.auth().signOut();
    }
    render() {
        return (
            <div>
          <div id="main">
            <nav>
              {/* <img src="logo.png"/> */}
              <ul>
                <li><a href="#">Home</a></li>
                <li><a href="#">Learn More</a></li>
                <li><a onClick={this.logout}>Our Sessions</a></li>

                <li><button onClick={this.logout}  >Logout</button></li>
                <li><a href="#">Blog</a></li>
              </ul>
            </nav>
          </div>
    
            </div>
        );
    }
}

export default Navafterlogin;