import React,{ Component } from 'react'
import { Card, Button } from "react-bootstrap";
import './css/course.css'
import five from './images/5th.svg';
import six from './images/6th.svg';
import seven from './images/7th.svg';
import eigth from './images/8th.svg'; 
import nine from './images/9th.svg';
import ten from './images/10th.svg';
import eleven from './images/11th.svg';
import twelve from './images/12th.svg';
import Arrow from './images/arrow.svg';
import sym from './images/Symbol.svg'

 
const data=[
    {
        
        title: "5",
        image: five
    },
    {
        title:"6",
        image:six
    },
    {
        title:"7",
        image: seven
    },
    {
        title:"8",
        image: eigth
    },
    {
        title:"9",
        image: nine
    },
    {
        title:"10",
        image: ten
    },
    {
        title:"11",
        image: eleven
    },
    {
        title:"12",
        image: twelve
    },
]


export default class Course extends Component{

    handleChange=() =>{
       // save state
    }
    renderCard = (card,index)=>{
        return(
            <div className="container">
                <Card className="courseCard gradeBox"key={index}  >
                    <Card.Img variant='top' src='holder.js/100px180' src={card.image} className="courseImage"/>
                </Card>
               <button className="gradeBtn" onClick={this.handleChange } style={{backgroundColor:'none',border:'0px',color:'black'}}>{card.title} <sup>th</sup> Grade</button>
            </div>
        );
    
    }

	render(){
		
		return( 
            <div className="main">
                <h2>Choose</h2>
                <h1><b>Your Course</b></h1>
                <br/>
                <div className='courseContainer'> {data.map(this.renderCard)} </div>
                <br />
                <button className="contiButton"> <img src={Arrow} alt="Arrow" /> CONTINUE</button>
            </div>
        );
	}
	
}