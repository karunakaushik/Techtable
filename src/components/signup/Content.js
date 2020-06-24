import React,{ Component } from 'react'
import { Card, Button } from "react-bootstrap";
import './css/content.css'

 
const data=[
    {
        title: "Reading",
        image: 'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"Music",
        image:'https://image.flaticon.com/icons/svg/2950/2950658.svg'
    },
    {
        title:"Exercising",
        image:'https://image.flaticon.com/icons/svg/2906/2906506.svg'
    },
    {
        title:"Painting",
        image:'https://image.flaticon.com/icons/svg/2491/2491429.svg'
    },
    {
        title:"",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"Reading",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
    {
        title:"Reading",
        image:'https://image.flaticon.com/icons/svg/2971/2971403.svg'
    },
]


export default class Content extends Component{

    handleChange=() =>{
       // save state
    }
    renderCard = (card,index)=>{
        return(
            <Card className="hobbyCard hobbyBox"key={index} >
                <Card.Img variant='top' src='holder.js/100px180' src={card.image} className="hobbyImage"/>
                <Card.Body>
                <Button onClick={this.handleChange } style={{backgroundColor:'#fff',border:'0px',color:'black'}}>{card.title}</Button>
                </Card.Body>
                    
                
            </Card>
        )
    
    }

	render(){
		
		return <div className='hobbyContainer'> {data.map(this.renderCard)} </div>

	}
	
}