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


 
const data=[
    {
        title: "V grade",
        image: five
    },
    {
        title:"VI grade",
        image:six
    },
    {
        title:"VII grade",
        image: seven
    },
    {
        title:"VIII grade",
        image: eigth
    },
    {
        title:"IX grade",
        image: nine
    },
    {
        title:"X grade",
        image: ten
    },
    {
        title:"XI grade",
        image: eleven
    },
    {
        title:"XII grade",
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
                <Card className="courseCard gradeBox"key={index} style={{width:'150px', height:'150px'}} >
                    <Card.Img variant='top' src='holder.js/100px180' src={card.image} className="courseImage"/>
                </Card>
               <h3 onClick={this.handleChange } style={{backgroundColor:'#fff',border:'0px',color:'black'}}>{card.title}</h3>
            </div>
        )
    
    }

	render(){
		
		return <div>
            <h2>Choose</h2>
            <h1>Your Course</h1>
            <div className='courseContainer'> {data.map(this.renderCard)} </div>
            <br />
            <Button style={{textAlign:'center' , width:"150px", backgroundColor: "#A34EAE"}}>CONTINUE</Button>
        </div>

	}
	
}