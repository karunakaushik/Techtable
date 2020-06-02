import React, { Component } from 'react'
import './css/formula.css'
import Formula1 from '../icons/formula1.png'
import Formula2 from '../icons/formula2.png'

export default class Formula extends Component {
    render() {
        return (
            <div className="formula_outer_div">
                <div className="formula_inner_div">
                     <img src={Formula1} alt="Formula1" style={{width:"50%"}} /><br />
                     <img src={Formula1} alt="Formula1" style={{width:"50%"}} /><br />
                     <img src={Formula1} alt="Formula1" style={{width:"50%"}} /><br />
                     <img src={Formula2} alt="Formula2" style={{width:"50%"}} />
                </div>
            </div>
        )
    }
}