import React, { Component } from 'react';
import '../css/ATPmainPage.css'
import {BrowserRouter, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ListImg from '../img/listIcon.svg'
export default class ATPMainPage extends Component{
    render() {
        return(
            <BrowserRouter>
            <div className="outerContainer_ATPMainPage">
                <div className="div1_ATP">
                    <h1 className="heading_ATPMainPage">Assignment, Test and Practice </h1>
                    <button className="addATPButton"> <img src={ListImg} alt="ListImg" /> Add Assignment</button>
                    <button className="addATPButton"> <img src={ListImg} alt="ListImg" /> Add Testt</button>
                    <button className="addATPButton"> <img src={ListImg} alt="ListImg" /> Add Practice</button>
                    <div className="classes_Nav_ATP">
                    <NavLink to="/atpclassIV" style={{textDecoration: "none" }} className="doubt_class"> Class IV</NavLink>
                    <NavLink to="/atpclassV" style={{textDecoration: "none" }} className="doubt_class"> Class V</NavLink>
                    <NavLink to="/atpclassVI" style={{textDecoration: "none" }} className="doubt_class"> Class VI</NavLink>
                    <NavLink to="/atpclassVII" style={{textDecoration: "none" }} className="doubt_class"> Class VII</NavLink>
                    </div>
                </div>
            </div>
            </BrowserRouter>
        )
    }
}