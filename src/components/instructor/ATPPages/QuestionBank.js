import React, { Component } from 'react'
import '../css/questionBank.css'
import CrownIcon from '../img/crown.svg'
import MedalIcon from '../img/medal.svg'
import StarIcon from '../img/star.svg'
import BackIcon from '../img/backarrow.svg'
import PostIcon from '../img/post.svg'
import Switch from 'react-switch'
import "react-datepicker/dist/react-datepicker.css";
import SumIcon from '../img/sumIcon.svg'
import AttachedFileIcon from '../img/link.svg'
import TableIcon from '../img/table.svg'
import VideoIcon from '../img/video.svg'
import GalleryIcon from '../img/image.svg'
import PdfIcon from '../img/pdf.svg'
import Bulleticon1 from '../img/list.svg'
import Bulleticon2 from '../img/listOl.svg'
import TextAlignIcon1 from '../img/paraLeft.svg'
import TextAlignIcon2 from '../img/paraJustify.svg'
import TextAlignIcon3 from '../img/paracenter.svg'
import DropIcon from '../img/downIcon.svg'
import DoubleTTIcon from '../img/twoT.svg'



export default class QuestionBank extends Component {
    constructor() {
        super();
        this.state = 
        { 
            checkedAssign: false,
            checkedTest: false,
            checkedPract: false,
            checkedQuestion:false,
            setcountdown: false,
         };

        this.handleChange = this.handleChange.bind(this);

      }
     
      handleChange(checked) {
        this.setState({checked});

      }
      

    
    
render() {
    // const [startDate, setStartDate] = useState(new Date());
        return(
            <div className="outerContainer_QB">
                   <div className="navbox_QB">
                       <div className="atpDiv_QB">
                            <div className="assign_QB">
                                <h1 className="assignHeading"> Assignment</h1>
                                <label>
                                    <Switch onChange={this.handleChange} checked={this.state.checkedAssign} onColor="#2196F3" onHandleColor="white" checkedIcon={false} uncheckedIcon={false} width={30} height={15} />
                                </label>
                            </div>
                            <div className="test_QB">
                                <h1 className="testHeading">Test</h1>
                                <label>
                                    <Switch onChange={this.handleChange} checked={this.state.checkedTest} onColor="#2196F3" onHandleColor="white" checkedIcon={false} uncheckedIcon={false} width={30} height={15} />
                                </label>
                            </div>
                            <div className="pract_QB">
                                <h1 className="practHeading">Practice</h1>
                                <label>
                                    <Switch onChange={this.handleChange} checked={this.state.checkedPract} onColor="#2196F3" onHandleColor="white" checkedIcon={false} uncheckedIcon={false} width={30} height={15} />
                                </label>
                            </div>
                       </div>
                       <div className="badgesDiv_QB">
                           <div className="crown_QB">
                               <p style={{margin:"0", fontSize:"10px"}}>Add Crwon</p>
                                <img src={CrownIcon} alt="Crown" />
                                <div>
                                    <input style={{outline:"0 !important"}} type="number" value="3" max="7" min="1" />
                                </div>
                           </div>
                           <div className="badge_QB">
                                <p style={{margin:"0", fontSize:"10px"}}>Add Badge</p>
                                <img src={MedalIcon} alt="Medal" />
                                <div>
                                    <input style={{outline:"0 !important"}} type="number" value="3" max="7" min="1" />
                                </div>
                           </div>
                           <div className="star_QB">
                               <p style={{margin:"0", fontSize:"10px"}}>Add Star</p>
                                <img src={StarIcon} alt="Star" />
                                <div>
                                    <input style={{outline:"0 !important"}} type="number" value="3" max="7" min="1" />
                                </div>
                           </div>
                               <button className="backButton"> <img src={BackIcon} alt="Back Arrow" />Back</button>
                               <button className="postButton"> <img src={PostIcon} alt="Post img " /> Post Test</button>
                       </div>
                   </div>
                   <div className="nav_editorBox">
                       <div className="editorinnerCard">
                           <button>12 <img src={DropIcon} alt="DropIcon" /></button> 
                           <img src={DoubleTTIcon} alt="DoubleTT" />
                           <button> <b>B</b></button>
                           <button> <i>I</i></button>
                           <button><u>U</u></button>
                           <button> <b>A</b><img src={DropIcon} alt="DropIcon" /></button>
                           <button> X<sup>2</sup></button>
                           <button>X<sub>2</sub></button>                     
                           <img src={TextAlignIcon1} alt="TextAlignIcon1" />
                           <img src={TextAlignIcon2} alt="TextAlignIcon2" />
                           <img src={TextAlignIcon3} alt="TextAlignIcon3" />
                           <img src={Bulleticon1} alt="Bulleticon1" />
                           <img src={Bulleticon2} alt="Bulleticon2" />
                           <img src={GalleryIcon} alt="GalleryIcon" />
                           <img src={PdfIcon} alt="PdfIcon" />
                           <img src={VideoIcon} alt="VideoIcon" />
                           <img src={TableIcon} alt="TableIcon" />
                           <img src={AttachedFileIcon} alt="AttachedFileIcon" />
                           <img src={SumIcon} alt="SumIcon" />
                       </div>
                   </div>

                   <div className="questionBankBox">

                       <div className="innerDivOfQB">
                           <div className="headerOfInnerDiv">
                               <div className="subHeaderQB">
                               <h1 className="heading_QB">Question Bank</h1>
                               <label>
                                    <Switch onChange={this.handleChange} checked={this.state.checkedQuestion} onColor="#2196F3" onHandleColor="white" checkedIcon={false} uncheckedIcon={false} width={30} height={15} />
                                </label>
                                </div>
                               <p style={{color:"#707070", paddingLeft:"25px"}}>This test will save in question bank</p>
                           </div>

                           <div className="detailsOfQBDiv">

                               <div className="detailsSubDiv1">
                                   <h1 className="detailshead_QB"> Time Allowed for test </h1>
                                   <input type="text" id="Duration" value="30min" className="inputTimeSet" />
                               </div>
                               <div className="detailsSubDiv2">
                                   <h1 className="detailshead_QB"> Test end schedule </h1>
                                    <div className="datetimepickerDiv">
                                        <input type="date" className="inputDateSet" id="end" name="test-end" value="2020-06-15" min="2020-06-15" max="2050-12-31"></input>
                                        <input type="time" id="Duration" name="end-time" value="10:00"  min="09:00" max="18:00" required className="inputTimeSet" />

                                    </div>

                               </div>
                               <div className="detailsSubDiv3">
                                   <h1 className="detailshead_QB"> Test start schedule </h1>
                                   <div className="datetimepickerDiv">
                                        <input type="date" className="inputDateSet" id="start" name="test-start" value="2020-06-15" min="2020-06-15" max="2050-12-31"></input>    
                                        <input type="time" id="Duration" name="start-time" value="10:00"  min="09:00" max="18:00" required className="inputTimeSet" />
                                    </div>
                               </div>
                               <div className="countdownDiv">
                                    <div className="setTitle">
                                        <h1 className="detailsheadSet_QB"> Set countdown  </h1>
                                            <label>
                                                <Switch onChange={this.handleChange} checked={this.state.setcountdown} onColor="#2196F3" onHandleColor="white" checkedIcon={false} uncheckedIcon={false} width={30} height={15} />
                                            </label>
                                    </div>
                                    <p className="submessage">
                                        It will show a countdownto this date    
                                    </p>                                        
                               </div>
                               <div className="scoreDiv">
                                   <h1 className="detailshead_QB"> Passing Score </h1>
                                   <br />
                                   <div className="percentDiv">
                                    <input style={{outline:"0 !important"}} type="number" value="40" max="100" min="30" /> &nbsp; % 
                                </div>                                        
                               </div>
                               <div className="passmsgDiv">
                                   <h1 className="detailshead_QB"> Pass message </h1>
                                   <p className="submessage">(appear when student passes)</p>
                                    <textarea className="testpassorfailmessage" />   
                               </div>
                               <div className="failmsgDiv">
                                   <h1 className="detailshead_QB"> Fali message </h1>
                                   <p className="submessage">(appear when student fails)</p>
                                    <textarea className="testpassorfailmessage" />   
                               </div>
                           </div>

                       </div>

                       <div className="marksDivQB"> 
                            <div className="totalMarksdiv">Total Marks <input  type="number" value="30" id="totalmarks" name="totalmarks" min="10" max="100"  style={{color: "black", outline: "0px !important "}} /></div>
                            <div className="remainMarksdiv">Remain marks <input type="number" value="0" id="remainmarks" name="remainmarks" min="0" max="100" style={{color:"black", outline:"0 !important"}} /></div>
                       </div>

                   </div>
            </div>
        )
    }
}