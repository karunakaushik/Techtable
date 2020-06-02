import React, { Component } from 'react'
import './css/doubts.css'
import SendIcon from '../icons/send.svg'
import GalleryIcon from '../icons/image.svg'
import AddDocuments from '../icons/paperclip.svg'
import CameraIcon from '../icons/camera.svg'
import UserImg from '../icons/usercircle.svg'


export default class ChatBot extends Component {
    state = { 
        selectedfile: null
    }

    fileSelectedHandler = event => {
        this.setState({
            selectedfile: event
        })
    }
    render() {
        return (
            <div className="doubt_outer_container">
                <div className="chat_container">
                   <div className="incomingmsg_inbox">
                       <div className="inComingMsgBox">
                            <div className="incoming_msg_img">
                                <img className="userPhoto" src={UserImg} alt="incoming_msg_img" />
                            </div>
                            <div className="incoming_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Doubts</p> 
                            </div>
                        </div>
                    </div>
                    <div className="outGoingmsg_inbox">
                        <div className="outGoingMsgBox">
                            <div className="outGoing_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Reply</p> 
                            </div>
                        </div>
                   </div>
                   <div className="incomingmsg_inbox">
                       <div className="inComingMsgBox">
                            <div className="incoming_msg_img">
                                <img className="userPhoto" src={UserImg} alt="incoming_msg_img" />
                            </div>
                            <div className="incoming_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Doubts</p> 
                            </div>
                        </div>
                    </div>
                    <div className="outGoingmsg_inbox">
                        <div className="outGoingMsgBox">
                            <div className="outGoing_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Reply</p> 
                            </div>
                        </div>
                   </div>
                   <div className="incomingmsg_inbox">
                       <div className="inComingMsgBox">
                            <div className="incoming_msg_img">
                                <img className="userPhoto" src={UserImg} alt="incoming_msg_img" />
                            </div>
                            <div className="incoming_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Doubts</p> 
                            </div>
                        </div>
                    </div>
                    <div className="outGoingmsg_inbox">
                        <div className="outGoingMsgBox">
                            <div className="outGoing_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Reply</p> 
                            </div>
                        </div>
                   </div>

                   <div className="incomingmsg_inbox">
                       <div className="inComingMsgBox">
                            <div className="incoming_msg_img">
                                <img className="userPhoto" src={UserImg} alt="incoming_msg_img" />
                            </div>
                            <div className="incoming_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Doubts</p> 
                            </div>
                        </div>
                    </div>
                    <div className="outGoingmsg_inbox">
                        <div className="outGoingMsgBox">
                            <div className="outGoing_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Reply</p> 
                            </div>
                        </div>
                   </div>

                   <div className="incomingmsg_inbox">
                       <div className="inComingMsgBox">
                            <div className="incoming_msg_img">
                                <img className="userPhoto" src={UserImg} alt="incoming_msg_img" />
                            </div>
                            <div className="incoming_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Doubts</p> 
                            </div>
                        </div>
                    </div>
                    <div className="outGoingmsg_inbox">
                        <div className="outGoingMsgBox">
                            <div className="outGoing_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Reply</p> 
                            </div>
                        </div>
                   </div>
                   <div className="incomingmsg_inbox">
                       <div className="inComingMsgBox">
                            <div className="incoming_msg_img">
                                <img className="userPhoto" src={UserImg} alt="incoming_msg_img" />
                            </div>
                            <div className="incoming_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Doubts</p> 
                            </div>
                        </div>
                    </div>
                    <div className="outGoingmsg_inbox">
                        <div className="outGoingMsgBox">
                            <div className="outGoing_msg">
                                <p style={{margin:"0", padding:"5px"}}>Message Reply</p> 
                            </div>
                        </div>
                   </div>                  
                   
                                                      
                </div>
                <div className="bottom_Chat_bar_div">
                    <div className="chat_bar">
                        <input className="enter_message" type="text" placeholder="Write your message..." />
                        <button type="submit" style={{border:"none", background:"white", outline:"none"}}><img className="imgDiv" src={SendIcon} alt="sendIcon" /></button>
                        <input type="file" style={{display:"none"}} onChange={this.fileSelectedHandler} ref={ fileInput => this.fileInput = fileInput} />
                        <button style={{border:"none", background:"white", outline:"none"}} onClick={() => this.fileInput.click()}><img className="imgDiv" src={AddDocuments} alt="AddDocuments" /></button>
                        <input type="file" style={{display:"none"}} onChange={this.fileSelectedHandler} ref={ fileInput => this.fileInput = fileInput} />
                        <button type="submit" style={{border:"none", background:"white", outline:"none"}} onClick={() => this.fileInput.click()}><img className="imgDiv" src={GalleryIcon} alt="GalleryIcon" /></button>
                        <button type="submit" style={{border:"none", background:"white", outline:"none"}}><img className="imgDiv" src={CameraIcon} alt="CameraIcon" /></button>
                    </div>
                 </div>
            </div>
        )
    }
}