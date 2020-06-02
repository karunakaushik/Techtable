import React, { Component } from 'react'
import './css/notes.css'
import AnnouncementIcon from '../icons/announcement.svg'
import ShareIcon from '../icons/share.svg'
import DownloadsIcon from '../icons/download.svg'
import ReadMeIcon from '../icons/readme.svg'
import NotesIcon from '../icons/addNotes.svg'


export default class Notes extends Component {
    constructor(props){
        super(props)
        this.state={
             info : ' extra information'
        }
    }
    render() {
        return (
            <div className="notes_outer_div">
                <div className="notes_inner_div_row1">
                    <div className="notes_inner_column_1_1">
                        <div className='img_notes_1_1'>
                                 <img src={AnnouncementIcon} alt="AnnouncementIcon" />
                            </div>      
                            <div className='heading_Notes_1_1'>
                                <h1 className="head_1_1">Announcement</h1> 
                                <p className="info_1_1">{this.state.info}</p>  
                            </div> 
                    </div>                    
                    <div className="notes_inner_column_1_2 ">
                        <div className='img_notes_1_2'>
                                 <img src={ReadMeIcon} alt="ReadMeIcon" />
                            </div>      
                            <div className='heading_Notes_1_2'>
                                <h1 className="head_1_2">Resources</h1> 
                                <p className="info_1_2">{this.state.info}</p>  
                            </div>
                     </div>
                </div>
                <div className="notes_inner_div_row2">
                     <div className="notes_inner_column_2_1">
                        <div className='img_notes_2_1'>
                                 <img src={ShareIcon} alt="Share" />
                            </div>      
                            <div className='heading_Notes_2_1'>
                                <h1 className="head_2_1">Share this Course</h1> 
                                <p className="info_2_1">{this.state.info}</p>  
                            </div>
                        </div>
                    <div className="notes_inner_column_2_2">
                        <div className='img_notes_2_2'>
                                 <img src={DownloadsIcon} alt="Downlaods" />
                            </div>      
                            <div className='heading_Notes_2_2'>
                                <h1 className="head_2_2">Downloads</h1> 
                                <p className="info_2_2">{this.state.info}</p>  
                            </div>
                    </div>
                </div>
                <div className="notes_inner_div_row3">
                     <div className="notes_inner_column_3_1">
                        <div className='img_notes_3_1'>
                                 <img src={NotesIcon} alt="Notes1" />
                            </div>      
                            <div className='heading_Notes_3_1'>
                                <h1 className="head_3_1">Notes 1</h1> 
                                <p className="info_3_1">{this.state.info}</p>  
                            </div>
                     </div>
                     <div className="notes_inner_column_3_2">
                        <div className='img_notes_3_2'>
                                 <img src={NotesIcon} alt="Notes2" />
                            </div>      
                            <div className='heading_Notes_3_2'>
                                <h1 className="head_3_2">Notes 2</h1> 
                                <p className="info_3_2">{this.state.info}</p>  
                            </div>
                    </div>
                </div>
                <div className="notes_inner_div_row4">
                    <div className="notes_inner_column_4_1">
                        <div className='img_notes_4_1'>
                                 <img src={NotesIcon} alt="Add notes" />
                            </div>      
                            <div className='heading_Notes_4_1'>
                                <h1 className="head_4_1">Add notes </h1> 
                                <p className="info_4_1">{this.state.info}</p>  
                            </div>
                     </div>
                    <div className="notes_inner_column_4_2">
                        <div className='img_notes_4_2'>
                                 <img src={NotesIcon} alt="Add Notes" />
                            </div>      
                            <div className='heading_Notes_4_2'>
                                <h1 className="head_4_2">Add notes</h1> 
                                <p className="info_4_2">{this.state.info}</p>  
                            </div>
                    </div>
                </div>                
            </div>
        )
    }
}