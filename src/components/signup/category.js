import React,{ Component } from 'react'
import { Card, Button } from "react-bootstrap";
import './css/category.css'

 
const data=[
    {
        title: "Elementary",
        image: 'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"Middle School",
        image:'https://image.flaticon.com/icons/svg/2950/2950658.svg'
    },
    {
        title:"High School",
        image:'https://image.flaticon.com/icons/svg/2906/2906506.svg'
    },
    {
        title:"NEET",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"IIT-JEE",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"Other",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
]


export default class GradeLevel extends Component{

    handleChange=() =>{
       // save state
    }
    renderCard = (card,index)=>{
        return(
            <Card className="gradeCard gradeBox"key={index} style={{width:'150px'}} >
                <Card.Img variant='top' src='holder.js/100px180' src={card.image} className="gradeImage"/>
                <Card.Body>
                <Button onClick={this.handleChange } style={{backgroundColor:'#fff',border:'0px',color:'black'}}>{card.title}</Button>
                </Card.Body>
                    
                
            </Card>
        )
    
    }

	render(){
		
		return <div>
            <h1>Select Grade Level</h1>
            <div className='gradeContainer'> {data.map(this.renderCard)} </div>
            <Button style={{textAlign:'center' , width:"200px",height:"50px",backgroundColor: "#A34EAE",border:0}}>CONTINUE</Button>
        </div>

	}
	
}