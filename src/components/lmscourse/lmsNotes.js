import React, { Component } from 'react';
import './css/lmsNotes.css'
import Announcement from './icons/announcement.svg'
import NextIcon from './icons/next.svg'
import Notice from './icons/notifications.svg'
import ShareIcon from './icons/share.svg'
import DownloadIcon from './icons/download.svg'
import Resources from './icons/readme.svg'


export default class LMSNotes extends Component{
    constructor(props){
        super(props)
        this.state={
             info : ' extra information'
        }
    }
    render() {
       

        return(
            <div className="outercontainer_Notes">
                <div className="notes_column_1">
                    <div className="announcement_Notes">
                            <div className='img_Notes_div_1'>
                                 <img src={Announcement} alt="Announcement" />
                            </div>      
                            <div className='heading_Notes_div_1'>
                                <h1 className="head_1">Announcement</h1> 
                                <p className="info_1">{this.state.info}</p>  
                            </div>   
                            <div className='next_Notes_1'>
                                <img src={NextIcon} alt="Next" />
                            </div>
                    </div>

                    <div className="downloads_Notes">
                        <div className='img_Notes_div_2'>
                        <img src={DownloadIcon} alt="DownloadIcon" />
                        </div>
                        <div className='heading_Notes_div_2'>
                             <h1 className="head_2">Downloads</h1>  
                             <p className="info_2">{this.state.info}</p>  
                        </div>    
                        <div className='next_Notes_2'>
                             <img src={NextIcon} alt="Next" />
                            
                        </div>             
                    </div>

                    <div className="notes_Notes">
                        <div className='img_Notes_div_3'>
                        <img src={Notice} alt="Notification" />
                        </div>
                        <div className='heading_Notes_div_3'>
                             <h1 className="head_3">Notes 1 (custom)</h1>  
                             <p className="info_3">{this.state.info}</p>  
                        </div>  
                        <div className='next_Notes_3'>
                            <img src={NextIcon} alt="Next" />
                        </div>                 
                    </div>

            </div>

                
                <div className="notes_column_2">
                    <div className="resources_Notes">
                        <div className='img_Notes_div_4'>
                           <img src={Resources} alt="Resources" />
                        </div> 
                        <div className='heading_Notes_div_4'>
                             <h1 className="head_4">Resources </h1>  
                             <p className="info_4">{this.state.info}</p>  
                        </div> 
                        <div className='next_Notes_4'>
                            <img src={NextIcon} alt="Next" />
                        </div>              
                    </div>

                    <div className="shareable_resources_Notes">
                        <div className='img_Notes_div_5'>
                        <img src={ShareIcon} alt="ShareIcon" />
                        </div>
                        <div className='heading_Notes_div_5'>
                             <h1 className="head_5">Resources </h1>  
                             <p className="info_5">{this.state.info}</p>  
                        </div>  
                        <div className='next_Notes_5'>
                            <img src={NextIcon} alt="Next" />
                        </div>                 
                    </div>
                    

                </div>
                
            </div>
        )
    }
}