import React,{ Component } from 'react'
import { Card, Button } from "react-bootstrap";
import './css/course.css'

 
const data=[
    {
        title: "V grade",
        image: 'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"VI grade",
        image:'https://image.flaticon.com/icons/svg/2950/2950658.svg'
    },
    {
        title:"VII grade",
        image:'https://image.flaticon.com/icons/svg/2906/2906506.svg'
    },
    {
        title:"VIII grade",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"IX grade",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"X grade",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"XI grade",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"XII grade",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
]


export default class Course extends Component{

    handleChange=() =>{
       // save state
    }
    renderCard = (card,index)=>{
        return(
            <Card className="courseCard gradeBox"key={index} style={{width:'150px'}} >
                <Card.Img variant='top' src='holder.js/100px180' src={card.image} className="courseImage"/>
                <Card.Body>
                <Button onClick={this.handleChange } style={{backgroundColor:'#fff',border:'0px',color:'black'}}>{card.title}</Button>
                </Card.Body>
                    
                
            </Card>
        )
    
    }

	render(){
		
		return <div>
            <h2>Choose</h2>
            <h1>Your Course</h1>
            <div className='courseContainer'> {data.map(this.renderCard)} </div>
            <Button style={{textAlign:'center' , width:"150px", backgroundColor: "#A34EAE"}}>CONTINUE</Button>
        </div>

	}
	
}