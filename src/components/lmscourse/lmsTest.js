import React, { Component } from 'react'
import {ChapterDetails} from './chapterdetails'
import TestCard from './lmsTestCard'
import './css/lmsTest.css'

export default class LMSTest extends Component{
    
    render() {
            return(
            <div className="testContainer">
                <div className="testBox">
                {ChapterDetails.map((test,index)=>{
                        return(
                            <div className="testCard" key={index}> 
                                <TestCard chapterdetails={test} />
                            </div>
                        ) 
                    })}
                </div>
            </div>
        )
    }
}