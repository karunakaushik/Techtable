

import React, { Component } from 'react';
import './footer.css';

class Footer extends Component {
    render() {
        return (
            <div class="footer">
            <div class="dash_links">
            <a href="">Teacher Login</a> <span>|</span>
            <a href="">Student Login</a> <span>|</span>
            <a href="">Blog</a> <span>|</span>
            <a href="">Register</a> <span>|</span>
            <a href="">Privacy and Policy</a> <span>|</span>
            <a href="">Terms and Conditions</a> <span>|</span>
            <a href="">Help Desk</a> <span>|</span>
            </div>
            </div>
        );
    }
}

export default Footer;