import React, { Component } from 'react'
import './css/lmsPdfCard.css'

export default class PdfCard extends Component {
    
    render() {

        const testdetail=this.props.testdetail

        return(
            <div className="pdfCard_Container">
                    <a href={testdetail.url}  style={{textDecoration:"none"}} >
                        <div className="pdf_Box">
                             <p> PDF </p>
                        </div>
                    </a>
                <div className="topic_name_div">
                    <h1 style={{fontSize:'17px', textAlign: "left", fontWeight:"bold"}}> 
                        {testdetail.topic}
                    </h1>
                </div>
            </div>
        )
    }
}