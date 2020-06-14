import React, { Component } from 'react';
import LMSSideBar from './lmsSideBar';
import LMSNavBar from './lmsNavBar'
import './css/lms.css'
// import LMSTestCard from './lmsTestCard';
import LMSTest from './lmsTest';
import LMSNotes from './lmsNotes';
import LMSInitialDetial from './lmsInitialDetail';
import LMSPdf from './lmsPdf';
export default class LMSMain extends Component{
    render() {
        return(
            <div className="lmsMainContainer">
               <div className="lmsleftContainer">
                    <LMSSideBar />
               </div>
                <div className="lmsrightContainer">
                    <div className="lmsMain_NavBar">
                           <LMSNavBar />
                    </div>
                    <div className="lms_components">
                          {/* <LMSNotes /> */}
                          {/* <LMSTest /> */}
                          {/* <LMSPdf /> */}
                          <LMSInitialDetial />
                    </div>
                    
                </div>
            </div>
        )
    }
}