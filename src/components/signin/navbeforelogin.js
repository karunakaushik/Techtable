
import React, {Component} from 'react';
import fire from "../../config/fire";

import './nav.css';


class Navbeforelogin extends Component {
    render() {
        return (
            <div>
                <nav>
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

export default Navbeforelogin;


