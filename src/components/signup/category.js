import React,{ Component } from 'react'
import { Card, Button } from "react-bootstrap";
import './css/category.css'
import Elementary from './images/elementary.svg';
import Middle from './images/middleSchool.svg';
import High from './images/highSchool.svg';
import Others from './images/Neet.svg';
import Arrow from './images/arrow.svg';


 
const data=[
    {
        title: "Elementary",
        image: Elementary
    },
    {
        title:"Middle School",
        image: Middle
    },
    {
        title:"High School",
        image: High
    },
    {
        title:"NEET",
        image: Others
    },
    {
        title:"IIT-JEE",
        image: Others
    },
    {
        title:"Other",
        image: Others
    },
]


export default class GradeLevel extends Component{

    handleChange=() =>{
       // save state
    }
    renderCard = (card,index)=>{
        return(
            <div className="cover">
                <Card className="gradeCard gradeBox"key={index}  >
                    <Card.Img variant='top' src='holder.js/100px180' src={card.image} className="gradeImage"/>    
                </Card>
                <button className="titlebtn" onClick={this.handleChange }>{card.title}</button>
            </div>
        )
    
    }

	render(){
		
		return(
             <div className="complete">
                <h1>Select Grade Level</h1>
                <br />  
                <div className='gradeContainer'> {data.map(this.renderCard)} </div>
                <button className="buttonC">  <img src={Arrow} alt="Arrow" />&nbsp;&nbsp;CONTINUE</button>
            </div>
        );
	}
	
}