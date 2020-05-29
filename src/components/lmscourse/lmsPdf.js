import React, { Component } from 'react'
import './css/lmsPdf.css'
import PdfCard from './lmsPdfCard'
import { TestDetails } from './testDetails'

export default class LMSPdf extends Component {
    render() {
        return(
            <div className="pdf_Container">
                <h1 className="pdftestHeading">Tests recommended for you</h1>
                <div className="pdf_div">
                {TestDetails.map((pdf,index)=>{
                        return(
                            <div className="pdfCard" key={index}> 
                                 <PdfCard testdetail= {pdf} />
                            </div>
                        ) 
                    })}
                </div>
            </div>
        )
    }
}