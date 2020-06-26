import React,{ Component } from 'react'
import { Card, Button } from "react-bootstrap";
import './css/course.css'

 
const data=[
    {
        title: "5",
        image: '5'
    },
    {
        title:"6",
        image:'6'
    },
    {
        title:"7",
        image:'7'
    },
    {
        title:"8",
        image:'8'
    },
    {
        title:"9",
        image:'9'
    },
    {
        title:"10",
        image:'10'
    },
    {
        title:"11",
        image:'11'
    },
    {
        title:"12",
        image:'12'
    },
]


export default class Course extends Component{

    handleChange=() =>{
       // save state
    }
    renderCard = (card,index)=>{
        return(
            <div className="cardOuterdiv">
            <Card className="courseCard gradeBox"key={index} style={{width:'150px'}} >
                <h1 className="cardheading">{card.image}<sup className="supth">th</sup></h1>
            </Card>
            <button onClick={this.handleChange } className="gradeButton" >{card.title} <sup>th</sup> Grade</button>
            </div>
        )
    
    }

	render(){
		
		return <div>
            <h2 className="headingChoose">Choose</h2>
            <h1 className="headingCourse">Your Course</h1>
            <div className='courseContainer'> {data.map(this.renderCard)} </div>
            <button className="continueButtonCourse">CONTINUE</button>
        </div>

	}
	
}