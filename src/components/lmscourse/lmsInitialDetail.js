import React, { Component } from 'react'
import './css/lmsinitialDetails.css'
import BigTarget from './icons/targetBigIcon.svg'
import Crown from './icons/crownicon.svg'

export default class LMSInitialDetial extends Component {
    render() {
    return (
        <div className="detailsBox">

                    <div className="completeTest">
                        <div className="pdfBox">
                            PDF
                        </div>
                        <div className="complete_div" >
                        <h1 className="testHeading">
                            Complete Test 
                        </h1>
                        <p className="testName">
                            Test name <br />
                            course name
                        </p>
                        <div class="progress" style={{borderRadius:'12px', height:'7px',width:'98%', marginTop:"0"}}>
                         <div class="progress-bar" style={{background:'#6A1F74',borderRadius:'12px'}} ></div>
                        </div>
                        </div>
                    </div>

                    <br />

                    <div className="todayTarget">
                        
                        <div className="target_iconBox">
                            <img src={BigTarget} alt="Target"  style={{ width: "100%"}}/>
                        </div>
                    <div className="target_div">
                        <h1 className="targetHeading">
                            Complete today's target 
                        </h1>
                        <p className="targetName">
                            Test name <br />
                           <p className="leveltext"> 
                           upgrade your level<br />
                           Complete this and earn 150 x <img src={Crown} alt="Crown " />
                           </p>
                        </p>
                    </div>
                    </div>
                </div>
    )
}
}
