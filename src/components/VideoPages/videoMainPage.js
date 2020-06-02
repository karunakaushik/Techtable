import React, { Component } from 'react'
import { Accordion, AccordionItem } from 'react-sanfona';
import { VideoLectures } from './videoLectures';
import VideoExtraInfo from './videoExtraInfo';
import './css/videoMainPage.css';

export default class VideoMainPage extends Component {
    render() {
        return(
            <div className="VideoPagouterContainer">
                <div className="video_div_column_1">

                    {/* <div> */}
                    <h1 className="chapter_name_video"> Physics 101 </h1>
                    {/* </div> */}
                    <div className="chapter_Listss">
                        <Accordion>
                            {VideoLectures.map(item => {
                                return (
                                    <AccordionItem title={item.lecture} expanded={item === 1}>
                                        <div className="subtopic_video_div">
                                            <ul className="subtopic_list_div" style={{listStyle:"none"}}>
                                                <li className="subtopic1" >
                                                {item.subtopic1} 
                                                </li>
                                                <li className="subtopic2">
                                                {item.subtopic2}
                                                </li>
                                                <li className="subtopic3">
                                                {item.subtopic3}
                                                </li>
                                            </ul>
                                        </div>
                                    </AccordionItem>
                                    );
                                })}
                        </Accordion>
                    </div>                
                </div>  


                <div className="video_div_column_2">
                    <div className="videoDiv_pdfDiv">
                            <h1>
                                Add here Video and PDF Components
                            </h1>
                        {/* <div className="videoDiv_videoPage">
                            gvhbjkl
                        </div>
                        <div className="pdfDiv_videoPage">
                            ghbjnkml
                        </div> */}
                         
                    </div>
                    <div className="extraInfo_videoPage">
                         <VideoExtraInfo />

                    </div>

                </div>
                
            </div>
        )
    }
}