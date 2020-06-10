import React, { Component } from 'react'
import '../css/doubtClasses.css'
import Student from '../img/userimg.svg'
import LectureSS from '../img/lectureSS.png'
import SolvedDoubt from '../img/solvedDoubt.png'
import InstructorImg from '../img/instructorPhoto.png'
import DoubtAnswer from '../img/solvedDoubt.png'

export default class ClassesDoubt extends Component{

    constructor() {
        super();
        this.state = {
           replybutton: "Reply"
        }
     }
  
    render() {
        var doubtquestion1 = 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit';
        var student1 = "Nikhat Afrin" ;
        var student2 = "Abhijit Sigh";
        var Instructor1 = "Mr. Mohan Dash"
        return (
            <div className="doutOuterBox">
                <div className="boxOfDoubt1">
                    <div className="studentImgDiv">
                        <img src={Student} className="studentImg" alt="student Photo" />
                    </div>
                    <div className="Student_Doubts_Div_1">
                        <div className="postedDetails_1">
                            <p style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#707070"}}>
                                {student1}
                            </p>
                            <li style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#707070"}}> Class IV</li>
                            <li style={{fontFamily:"Arial", color:"#707070"}}>30min ago</li>
                            
                        </div>
                        <div className="questionsDiv_1">
                            {doubtquestion1}
                        </div>
                        <div className="allbuttonsDiv">
                            <button className="replyBtn_Doubt"  onClick={e => this.setState({replybutton: "Clear Doubt"})}>{this.state.replybutton}</button>
                            <button className="deleteBtn_Doubt">Delete</button>
                            <button className="reportBtn_Doubt">Report</button>
                        </div>
                    </div>
                    <div className="lectureVideo_1">
                        <img src={LectureSS} alt="LectureSS" />
                         <h1 className="lectureName_Doubt">Physics lecture 1</h1>
                    </div>
                </div>


                <div className="boxOfDoubt2">
                    <div className="studentImgDiv">
                        <img src={Student} className="studentImg" alt="student Photo" />
                    </div>
                    <div className="Student_Doubts_Div_1">
                        <div className="postedDetails_1">
                            <p style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#707070"}}>
                                {student2}
                            </p>
                            <li style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#707070"}}> Class IV</li>
                            <li style={{fontFamily:"Arial", color:"#707070"}}>30min ago</li>
                            
                        </div>
                        <div className="questionsDiv_1">
                            {doubtquestion1}
                        </div>
                        {/* <div className="allbuttonsDiv">
                            <button className="replyBtn_Doubt">Reply</button>
                            <button className="deleteBtn_Doubt">Delete</button>
                            <button className="reportBtn_Doubt">Report</button>
                        </div> */}
                        <div className="solvedDoubtImgDiv">
                            <img src={SolvedDoubt} alt="solved Doubt image" />

                        </div>
                    </div>
                    <div className="lectureVideo_1">
                        <img src={LectureSS} alt="LectureSS" />
                         <h1 className="lectureName_Doubt">Physics lecture 1</h1>
                    </div>
                </div>
                
                <div className="boxOfDoubt3">
                    <div className="studentImgDiv">
                        <img src={Student} className="studentImg" alt="student Photo" />
                    </div>
                    <div className="Student_Doubts_Div_1">
                        <div className="postedDetails_1">
                            <p style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#707070"}}>
                                {student1}
                            </p>
                            <li style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#707070"}}> Class IV</li>
                            <li style={{fontFamily:"Arial", color:"#707070"}}>30min ago</li>
                            
                        </div>
                        <div className="questionsDiv_1">
                            {doubtquestion1}
                        </div>

                        <div className="Instructor_Div" id="replyOftheDoubt"> 
                            <div className="instructorImgDiv">
                                <img src={InstructorImg} className="InstructorImg" alt="Instructor Photo" />
                            </div>
                            <div className="Instructor_reply_Div_1">
                                <div className="replyDetails_1">
                                    <p style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#6A1F74"}}>
                                        {Instructor1}
                                    </p>
                                    <li style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#707070"}}> Physics Instructor</li>
                                    <li style={{fontFamily:"Arial", color:"#707070"}}>30min ago</li>
                            
                                 </div>
                            <div className="replyOfDoubtsDiv_1">
                                {/* <p> */}
                                    Solve it like that <br />
                                    after that you can ask                               
                                {/* </p> */}
                            </div>
                            <div className="solvedDoubtImgDiv">
                                <img src={DoubtAnswer} alt="DoubtAnswer" />
                            </div>
                            <div className="allbuttonsDivOfInstructor">
                                <button className="editBtn_Doubt">Edit</button>
                                <button className="deleteBtn_Doubt">Delete</button>
                            </div>
                           </div>                        
                        </div>

                        <div className="allbuttonsDiv">
                            <button className="clearDoubt_Btn_Doubt">Clear Doubt</button>
                            <button className="deleteBtn_Doubt">Delete</button>
                            <button className="reportBtn_Doubt">Report</button>
                        </div>
                    </div>
                    <div className="lectureVideo_1">
                        <img src={LectureSS} alt="LectureSS" />
                         <h1 className="lectureName_Doubt">Physics lecture 1</h1>
                    </div>
                </div>


                <div className="boxOfDoubt4">
                    <div className="studentImgDiv">
                        <img src={Student} className="studentImg" alt="student Photo" />
                    </div>
                    <div className="Student_Doubts_Div_1">
                        <div className="postedDetails_1">
                            <p style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#707070"}}>
                                {student1}
                            </p>
                            <li style={{paddingRight:"20px" ,fontFamily:"Arial", color:"#707070"}}> Class IV</li>
                            <li style={{fontFamily:"Arial", color:"#707070"}}>30min ago</li>
                            
                        </div>
                        <div className="questionsDiv_1">
                            {doubtquestion1}
                        </div>
                        <div className="allbuttonsDiv">
                            <button className="clearDoubt_Btn_Doubt">Clear Doubt</button>
                            <button className="deleteBtn_Doubt">Delete</button>
                            <button className="reportBtn_Doubt">Report</button>
                        </div>
                    </div>
                    <div className="lectureVideo_1">
                        <img src={LectureSS} alt="LectureSS" />
                         <h1 className="lectureName_Doubt">Physics lecture 1</h1>
                    </div>

                </div>

            </div>
        )
    }
}