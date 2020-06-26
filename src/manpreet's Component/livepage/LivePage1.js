import React,{Component} from  'react';
import ReactDOM from 'react-dom';
import './LivePage1.css';
import VideoImage from './videoimage.PNG';




class LivePage1 extends Component {

  openForm() {

    console.log('button clicked')
    }
    

    render(){

        return (

            <>
            



  <nav class="navbar navbar-expand-lg navbar-light ">
    <a class="navbar-brand" style={{color:'white'}} href="#">Navbar</a>
  </nav>

  <div class="main1">
  <h1 class="liveclass">Live Class   <span class="time">00:45:35</span>
  </h1>
  
  <button class="btn btn-primary btn1" type="submit">End class</button>
  <button class="btn btn-primary btn2" type="submit">Pause</button>
 
  
</div>
  
  
  


  
  
 <div class="main">
 
 
 <i class="fas fa-microphone-alt icon"><span style={{fontSize:'10px' ,fontWeight:'bold'}} class="text"> <br/>Audio</span></i>
 <i class="fas fa-video icon"><span style={{fontSize:'10px' ,fontWeight:'bold'}} class="text"> <br/> Video</span></i>

 
   
 <i class="fas fa-mouse-pointer icon1"><span   style={{fontSize:'10px' ,fontWeight:'bold'}} class="text"><br/> Pointer</span></i>
 <i class="fas fa-users icon2"><span style={{fontSize:'10px' ,fontWeight:'bold'}} class="text"><br/> Students</span></i>
 <i class="fas fa-chalkboard icon3"><span style={{fontSize:'10px' ,fontWeight:'bold'}} class="text"> <br/>Whiteboard</span></i>
 <i class="fas fa-desktop icon4"><span style={{fontSize:'10px' ,fontWeight:'bold'}} class="text"><br/> Sharescreen</span></i>
 

 
 <button class="btn  btn3" type="submit"><i class="material-icons">fullscreen</i>Full Screen</button>
      <button class="btn btn4 " onClick={this.openForm}  ><i class="fas fa-question iconquestion "></i>Doubt</button>
      <button class="btn  btn5" type="submit"><i class="fas fa-file-alt iconquiz"></i>Quiz</button>
      
       </div>
  
     


     
 
  <img  src={VideoImage}  width="100%" alt=""/>















        </>
        );




    }




}
export default LivePage1;