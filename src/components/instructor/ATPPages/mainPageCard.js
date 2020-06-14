import React, { Component } from 'react';
import '../css/mainPageCard.css'
import ListImg from '../img/listIcon.svg'
import LectureSS from '../img/lectureSS.png'
import EditIcon from '../img/editicon.svg'


export default class ATPCard extends Component{
    render() {
        const videodetails = this.props.videodetail
        return(
            <div className="card_container">
                <div className="serialNumberDIv">
                    {videodetails.serialNo}
                </div>

                <div className="card_Div1">
                    <div className="videoDiv">
                        <img className="lectDivImg" src={LectureSS} alt="LectureSS" />
                        {/* {videodetails.src} */}
                        <div className="videoTopic">
                            <h1 className="lectureName_ATP">Physics lecture 1</h1>
                            <p className="extra_Info_ATP">  Extra information </p>
                        </div>

                    </div>
                    <div className="card_subDiv">
                        <div className="testDiv">
                            <p style={{margin:"0"}}>3</p>&nbsp; &nbsp;
                            <button className="addnewTest"><img className="listIcon" src={ListImg} alt="ListImg" /> Add new Test</button>
                            </div>
                        <div className="practiceDiv">
                            <p style={{margin:"0"}}>3</p> &nbsp; &nbsp;
                            <button className="addnewPractice"><img className="listIcon" src={ListImg} alt="ListImg" /> Add new Practice</button>
                        </div>
                        <div className="dateATPBox">
                            <p className="dateDivATP"> Apr 27, 2020</p>
                            <p className="modifiedDateATP"> Last modified </p>
                        </div>
                    </div>
                </div>
                <div className="editButtonDiv">
                    <button className="editButton"> <img className="editImgDIv" src={EditIcon} alt="editicon" />Edit</button>
                </div>
               
            </div>
        )
    }
}