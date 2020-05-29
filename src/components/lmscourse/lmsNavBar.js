import React, { Component } from 'react'
import './css/lmsNavBar.css'
// import { Card } from '@material-ui/core'
import Book from './icons/bookicon.svg'
import Video from './icons/videoicon.svg'
import PaperClip from './icons/paperclipIcon.svg'
import List from './icons/listicon.svg'
import Target from './icons/targeticon.svg'
import 'bootstrap/dist/css/bootstrap.css';

// import { Progress } from 'reactstrap'

export default class LMSNavBar extends Component{
    render() {
        return(
            <div className="outercontainer">
                <div className="lmsBar">
                    
                    <div className="box1">
                        <div className="coursecard">
                            <p className="coursetext">Course  1</p>
                            <img src={Book} alt="Book" />
                        </div>
                        <div class="progress" style={{borderRadius:'12px', height:'20px'}}>
                         <div class="progress-bar" style={{background:'#FE5F00', borderRadius:'12px'}} ></div>
                        </div>
                   </div>
                   <div className="box2">

                        <div className="cardBox">
                        <div className="videocard">
                            <img src={Video} alt="Video" /> <br />
                        </div>
                        <p className="text">
                        Video
                        </p>
                        </div>

                        <div className="cardBox">
                        <div className="paperclipcard">
                            <img src={PaperClip} alt="PaperClip" />
                        </div>
                        <p className="text">
                            Notes
                        </p>
                        </div>
                   {/* </div> */}
                   {/* <div className="box3"> */}
                   <div className="cardBox">
                       <div className="listcard">
                            <img src={List} alt="List" />                            
                        </div>
                        <p className="text">
                           Tests
                        </p>
                        </div>
                        <div className="cardBox">
                        <div className="targetcard">
                            <img src={Target} alt="Target" />                            
                        </div>
                        <p className="text">
                            Targets
                        </p>
                        </div>
                    
                   </div>
                </div>
                               
            </div>
        )
    }
}