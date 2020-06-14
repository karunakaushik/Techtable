import React, { Component } from 'react';
import '../css/ATPmainPage.css'
import {BrowserRouter, Route} from 'react-router-dom'
import { NavLink } from 'react-router-dom'
import ListImg from '../img/listIcon.svg'
import LectureSS from '../img/lectureSS.png'
import ATPCard from './mainPageCard'
export default class ATPMainPage extends Component{
    render() {
        const VideoList = [
            {
                id:0,
                serialNo: "1",
                // src: LectureSS
            },
            {
                id:1,
                serialNo: "2",
                // src: LectureSS
            },
            {
                id:2,
                serialNo: "3",
                // src: LectureSS
            },
            {
                id:3,
                serialNo: "4",
                // src: LectureSS
            },
            {
                id:4,
                serialNo: "5",
                // src: LectureSS
            },
            {
                id:5,
                serialNo: "6",
                // src: LectureSS
            },
            {
                id:6,
                serialNo: "7",
                // src:LectureSS
            },
            {
                id:7,
                serialNo: "8",
                // src:LectureSS
            },
            {
                id:8,
                serialNo: "9",
                // src: LectureSS
            },,
            {
                id:9,
                serialNo: "10",
                // src:LectureSS
            },
            ]
        return(
            <BrowserRouter>
            <div className="outerContainer_ATPMainPage">
                <div className="div1_ATP">
                    <div className="heading_Div">
                        <h1 className="heading_ATPMainPage">Assignment, Test and Practice </h1>
                        <div className="classes_Nav_ATP">
                            <NavLink to="/atpclassIV" style={{textDecoration: "none" }} className="atp_class"> Class IV</NavLink>
                            <NavLink to="/atpclassV" style={{textDecoration: "none" }} className="atp_class"> Class V</NavLink>
                            <NavLink to="/atpclassVI" style={{textDecoration: "none" }} className="atp_class"> Class VI</NavLink>
                            <NavLink to="/atpclassVII" style={{textDecoration: "none" }} className="atp_class"> Class VII</NavLink>
                        </div>
                    </div>
                    
                    <div className="atpButtons">
                        <button className="addATPButton"> <img className="listImg" src={ListImg} alt="ListImg" /> Add Assignment</button>
                        <button className="addATPButton"> <img className="listImg" src={ListImg} alt="ListImg" /> Add Test</button>
                        <button className="addATPButton"> <img className="listImg" src={ListImg} alt="ListImg" /> Add Practice</button>
                    </div>
                </div>

                
                <div className="listATPContainer">
                <div className="title_Div1">
                    <p className="titleVideo">Video</p>
                    <div className="title_Div2">
                    <p className="titleTest">Test</p>
                    <p className="titlePractice">Practice </p>
                    <p className="titleDate">Date</p>
                    </div>
                </div>

                {VideoList.map((lectures,index)=>{
                        return(
                            <div className="atpCardContainer" key={index}> 
                                 <ATPCard videodetail= {lectures} />
                            </div>
                        ) 
                    })}
                </div>
                
            </div>
            </BrowserRouter>
        )
    }
}