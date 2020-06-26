import React, {Component, Fragment} from 'react';
import Modal from 'react-modal';
import Avtar from './avtar.png';
import Video from './video.PNG';
import './VideoPage.css';


export class VideoPage extends Component {
  constructor(props) {
    super(props)

this.state={
  seen:false,
  seeen:false,
  display:false,
  show:false,
  visible:false
};
  }
  onOpenModal = () => {
    this.setState({ seen: true });
  };
  onCloseModal = () => {
    this.setState({ seen: false });
  };
  onOpenModal1 = () => {
    this.setState({ seeen: true });
  };
  onCloseModal1 = () => {
    this.setState({ seeen: false });
  };
  onOpenModal2 = () => {
    this.setState({ display: true });
  };
  onCloseModal2 = () => {
    this.setState({ display: false });
  };
  onOpenModal3 = () => {
    this.setState({ show: true });
  };
  onCloseModal3 = () => {
    this.setState({ show: false });
  };
  onOpenModal4 = () => {
    this.setState({ visible: true });
  };
  onCloseModal4 = () => {
    this.setState({ visible: false });
  };
    render(){
      const {  seen,seeen,display,show,visible} = this.state;
      
        return(



            <Fragment>
            <div class="sidebar">
        	<img class="profile" src={Avtar} alt="Avatar" />
        <br/>
        	<span class="instructorname"> Mr.Mohan Das</span>
        	<br/>
        	<span class="instructor" > Physics Instructor</span>

        

    <div class="icons">  	
<a href="#home"><i class="fa fa-comment"></i>  Clear doubts</a>
  <a href="#services"><i class="fas fa-video"></i> Video Lectures</a>
  <a href="#clients"><i class="fas fa-video"></i> ATP series</a>
  <a href="#contact"><i class="fas fa-video"></i> Announcement</a>
  <a href="#contact"><i class="fa fa-pencil-square-o"></i> Reports</a>
  <a href="#contact"><i class="fa fa-fw fa-envelope"></i> Live chats</a>

</div>
</div>


<div class="videolectures">
<h1 class="videoheading">Your video lectures</h1>


<ul class=" listitem">
<li ><a href="#">ClassIV</a></li>
  <li ><a href="#">ClassIV</a></li>
  <li ><a href="#">ClassIV</a></li>
  <li ><a href="#">ClassIV</a></li>
</ul>

<div class="buttons">
<div><button onClick={this.onOpenModal} class="btn btn-primary btn1" type="submit"><i class="fa fa-upload" aria-hidden="true"></i>  Upload Resources</button></div>
<div><button onClick={this.onOpenModal1}class="btn btn-primary btn2" type="submit"><i class="fas fa-video"></i>  Video Lectures</button></div>
<div><button class="btn btn-primary btn4" type="submit"><i class="fa fa-file-word-o"></i>  File/Link</button></div>
</div>
</div>

<table class="table ">
  <thead>
    <tr class="row1">
      <th  class="col1"scope="col">Video</th>
      <th class="col2" scope="col">Move</th>
      <th class="col3" scope="col">Doubts</th>
      <th class="col4" scope="col">Test</th>
      <th class="col5" scope="col">Practice</th>
      <th class="col6" scope="col">Date</th>
    </tr>
  </thead>
  <tbody>
    <tr class="row2">
      <td class="videocol" >
    
      <img class="videoimg" src={Video}alt="Avatar" style={{width:"125px"}} />
<div class="content">

<p style={{fontSize:"14px"}}>Physics lecture 1</p>
<p style={{fontSize:"12px"}}>Extra information</p>
<p style={{fontSize:"12px"}}>10:00 mins</p>
</div>

      </td>
      <td class="movecol">
      <div class="movecontent">
      <p><i class="fa fa-arrow-up" aria-hidden="true"></i> Up</p>
    <p><i class="fa fa-arrow-down" aria-hidden="true"></i> Down</p>
    </div>
      </td>

      <td class="doubtcol">
      <p class="doubtcontent">32</p>
      </td>
      <td class="testcol">
      <p class="testcontent">3</p>
      </td>
      <td class="practicecol">

      <p class="practicecontent">3</p>
      </td>
      <td class="datecol"> 
      <div class="datecontent">
    <p>Apr 27,2020</p>
    <p style={{fontSize:"12px"}}>Uploaded</p>
    </div>
    <button class="btn btn-primary btn3 " type="submit"><i class="fa fa-pencil"></i>  Edit</button>
    
      </td>
    </tr>
    <tr class="row2">
      <td class="videocol" >
    
      <img class="videoimg" src={Video}  alt="Avatar" style={{width:"125px"}} />
<div class="content">

<p style={{fontSize:"14px"}}>Physics lecture 1</p>
<p style={{fontSize:"12px"}}>Extra information</p>
<p style={{fontSize:"12px"}}>10:00 mins</p>
</div>

      </td>
      <td class="movecol">
      <div class="movecontent">
      <p><i class="fa fa-arrow-up" aria-hidden="true"></i> Up</p>
    <p><i class="fa fa-arrow-down" aria-hidden="true"></i> Down</p>
    </div>
      </td>

      <td class="doubtcol">
      <p class="doubtcontent">32</p>
      </td>
      <td class="testcol">
      <p class="testcontent">3</p>
      </td>
      <td class="practicecol">

      <p class="practicecontent">3</p>
      </td>
      <td class="datecol"> 
      <div class="datecontent">
    <p>Apr 27,2020</p>
    <p style={{fontSize:"12px"}}>Uploaded</p>
    </div>
    <button class="btn btn-primary btn3 " type="submit"><i class="fa fa-pencil"></i>  Edit</button>
    
      </td>
    </tr>
    <tr class="row2">
      <td class="videocol" >
    
      <img class="videoimg" src={Video}  alt="Avatar" style={{width:"125px"}} />
<div class="content">

<p style={{fontSize:"14px"}}>Physics lecture 1</p>
<p style={{fontSize:"12px"}}>Extra information</p>
<p style={{fontSize:"12px"}}>10:00 mins</p>
</div>

      </td>
      <td class="movecol">
      <div class="movecontent">
      <p><i class="fa fa-arrow-up" aria-hidden="true"></i> Up</p>
    <p><i class="fa fa-arrow-down" aria-hidden="true"></i> Down</p>
    </div>
      </td>

      <td class="doubtcol">
      <p class="doubtcontent">32</p>
      </td>
      <td class="testcol">
      <p class="testcontent">3</p>
      </td>
      <td class="practicecol">

      <p class="practicecontent">3</p>
      </td>
      <td class="datecol"> 
      <div class="datecontent">
    <p>Apr 27,2020</p>
    <p style={{fontSize:"12px"}}>Uploaded</p>
    </div>
    <button class="btn btn-primary  btn3" type="submit"><i class="fa fa-pencil"></i>  Edit</button>
    
      </td>
    </tr>
    <tr class="row2">
      <td class="videocol" >
    
      <img class="videoimg" src={Video} alt="Avatar" style={{width:"125px"}} />
<div class="content">

<p style={{fontSize:"14px"}}>Physics lecture 1</p>
<p style={{fontSize:"12px"}}>Extra information</p>
<p style={{fontSize:"12px"}}>10:00 mins</p>
</div>

      </td>
      <td class="movecol">
      <div class="movecontent">
      <p><i class="fa fa-arrow-up" aria-hidden="true"></i> Up</p>
    <p><i class="fa fa-arrow-down" aria-hidden="true"></i> Down</p>
    </div>
      </td>

      <td class="doubtcol">
      <p class="doubtcontent">32</p>
      </td>
      <td class="testcol">
      <p class="testcontent">3</p>
      </td>
      <td class="practicecol">

      <p class="practicecontent">3</p>
      </td>
      <td class="datecol"> 
      <div class="datecontent">
    <p>Apr 27,2020</p>
    <p style={{fontSize:"12px"}}>Uploaded</p>
    </div>
    <button class="btn btn-primary btn3 " type="submit"><i class="fa fa-pencil"></i>  Edit</button>
    
      </td>
    </tr>
    <tr class="row2">
      <td class="videocol" >
    
      <img class="videoimg" src= {Video} alt="Avatar" style={{width:"125px"}} />
      
<div class="content">

<p style={{fontSize:"14px"}}>Physics lecture 1</p>
<p style={{fontSize:"12px"}}>Extra information</p>
<p style={{fontSize:"12px"}}>10:00 mins</p>
</div>

      </td>
      <td class="movecol">
      <div class="movecontent">
      <p><i class="fa fa-arrow-up" aria-hidden="true"></i> Up</p>
    <p><i class="fa fa-arrow-down" aria-hidden="true"></i> Down</p>
    </div>
      </td>

      <td class="doubtcol">
      <p class="doubtcontent">32</p>
      </td>
      <td class="testcol">
      <p class="testcontent">3</p>
      </td>
      <td class="practicecol">

      <p class="practicecontent">3</p>
      </td>
      <td class="datecol"> 
      <div class="datecontent">
    <p>Apr 27,2020</p>
    <p style={{fontSize:"12px"}}>Uploaded</p>
    </div>
    <button class="btn btn-primary btn3 " type="submit"><i class="fa fa-pencil"></i>  Edit</button>
    
      </td>
    </tr>
    <tr class="row2">
      <td class="videocol" >
    
      <img class="videoimg" src={Video} alt="Avatar" style={{width:"125px"}} />
<div class="content">

<p style={{fontSize:"14px"}}>Physics lecture 1</p>
<p style={{fontSize:"12px"}}>Extra information</p>
<p style={{fontSize:"12px"}}>10:00 mins</p>
</div>

      </td>
      <td class="movecol">
      <div class="movecontent">
      <p><i class="fa fa-arrow-up" aria-hidden="true"></i> Up</p>
    <p><i class="fa fa-arrow-down" aria-hidden="true"></i> Down</p>
    </div>
      </td>

      <td class="doubtcol">
      <p class="doubtcontent">32</p>
      </td>
      <td class="testcol">
      <p class="testcontent">3</p>
      </td>
      <td class="practicecol">

      <p class="practicecontent">3</p>
      </td>
      <td class="datecol"> 
      <div class="datecontent">
    <p>Apr 27,2020</p>
    <p style={{fontSize:"12px"}}>Uploaded</p>
    </div>
    <button class="btn btn-primary  btn3 " type="submit"><i class="fa fa-pencil"></i>  Edit</button>
    
      </td>
    </tr>
    <tr class="row2">
      <td class="videocol" >
    
      <img class="videoimg" src={Video}  alt="Avatar" style={{width:"125px"}} />
<div class="content">

<p style={{fontSize:"14px"}}>Physics lecture 1</p>
<p style={{fontSize:"12px"}}>Extra information</p>
<p style={{fontSize:"12px"}}>10:00 mins</p>
</div>

      </td>
      <td class="movecol">
      <div class="movecontent">
      <p><i class="fa fa-arrow-up" aria-hidden="true"></i> Up</p>
    <p><i class="fa fa-arrow-down" aria-hidden="true"></i> Down</p>
    </div>
      </td>

      <td class="doubtcol">
      <p class="doubtcontent">32</p>
      </td>
      <td class="testcol">
      <p class="testcontent">3</p>
      </td>
      <td class="practicecol">

      <p class="practicecontent">3</p>
      </td>
      <td class="datecol"> 
      <div class="datecontent">
    <p>Apr 27,2020</p>
    <p style={{fontSize:"12px"}}>Uploaded</p>
    </div>
    <button class="btn btn-primary btn3 " type="submit"><i class="fa fa-pencil"></i>  Edit</button>
    
      </td>
    </tr>
   
   
  </tbody>
</table>
<Modal isOpen={seen}   onClose={this.onCloseModal} style={{

  overlay:{backgroundColor:'lightgrey'},
 content:{
   left:'200px',
   right:'200px'
 }
}}>
  <div class="row">
    <div class="col-sm-10">
  <h3>Video Lecture</h3>
  </div>
  <div class="col-sm-2">
  <button type="button" class="btn "style={{float:'right',color:'white',backgroundColor:'black'}} onClick={this.onCloseModal} >X</button>
  </div>
</div>
<hr style={{color:'black',width:'100%'}}/>

<div class="section" style={{marginTop:'100px'}}>
  <div class="row">
    <div class="col-sm-2"></div>
<div class="col-sm-10"> <a href="#"> <img src="https://image.flaticon.com/icons/svg/2878/2878855.svg " style={{height:'100px',backgroundColor:'lightgrey',borderRadius:'50%'}}/></a>
 </div>
 </div>
 <div class="row mt-4">
   <div class="col-sm-4"></div>
   <div class="col-sm-8 " style={{fontSize:'18px'}}>You can Drag and Drop files here to add them</div>
  
 </div>
 <div class="row mt-2">
   <div class="col-sm-5"></div>
   <div class="col-sm-7 " style={{fontSize:'10px',color:'grey'}}>Your File will be invisible until it gets approval</div>
  
 </div>
 <div class="row mt-5">
   <div class="col-sm-4"></div>
   <div class="col-sm-3 ">
<button type="button" class="btn btn-primary">SAVE CHANGES</button></div>
   <div class="col-sm-3 ">
<button type="button" class="btn btn-primary">SELECT FILE</button></div>
   <div class="col-sm-2 "></div>
  
 </div>
</div>
 
 


</Modal>
<Modal isOpen={seeen}   onClose={this.onCloseModal1} style={{

overlay:{backgroundColor:'lightgrey'},
content:{
 left:'200px',
 right:'200px'
}
}}>
<div class="row">
  <div class="col-sm-4">
<h3>Video Lecture</h3>
</div>
<div class="col-sm-6">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Details</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " style={{color:'black'}} href="#">Category</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " style={{color:'black'}}href="#">Extra Info</a>
  </li>
 
</ul>
</div>
<div class="col-sm-2">
<button type="button" class="btn "style={{float:'right',color:'white',backgroundColor:'black'}} onClick={this.onCloseModal1} >X</button>
</div>
</div>
<hr style={{color:'black',width:'100%'}}/>
<div class="row">
  <div class="col-sm-12" style={{fontWeight:'bold'}}>Details</div>

</div>
<div class="row">
  <div class ="col-sm-2"></div>
  <div class ="col-sm-5"><img src={Video}/></div>
  <div class ="col-sm-5" style={{fontSize:'16px',color:'grey'}}>Physics Lecture 1 <br/> Extra Information <br/> 10:00 mins</div>
  
</div>
<div class="row mt-4">
  <div class="col-sm-2"></div>
  <div class="col-sm-8">
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Title</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
  <div class="col-sm-2"></div>
</div>
</div>
<div class="row mt-4">
  <div class="col-sm-2"></div>
  <div class="col-sm-8">
<div class="input-group">
  <div class="input-group-prepend">
    <span class="input-group-text">Description</span>
  </div>
  <textarea class="form-control" aria-label="With textarea"></textarea>
  </div>
  <div class="col-sm-2"></div>
</div>
</div>
<hr class="mt-3"style={{color:'black',width:'100%'}}/>
<div class="row mt-5 mb-0">
  <div class="col-sm-3"style={{fontsize:'8px',color:'#34a4eb'}}>*Required</div>
  <div class="col-sm-5" style={{fontSize:'10px'}}><a href="#">Terms Privacy Policy and Cookie policy</a></div>
  <div class="col-sm-2"><button type="button" class="btn btn-primary"onClick={this.onCloseModal1}>PREVIOUS</button></div>
  <div class="col-sm-2"><button type="button" class="btn btn-primary" onClick={this.onOpenModal2}>NEXT</button></div>
</div>
</Modal>
           
<Modal isOpen={display}   onClose={this.onCloseModal2} style={{

overlay:{backgroundColor:'lightgrey'},
content:{
 left:'200px',
 right:'200px'
}
}}>
<div class="row">
  <div class="col-sm-4">
<h3>Video Lecture</h3>
</div>
<div class="col-sm-6">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Details</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active "  href="#">Category</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " style={{color:'black'}}href="#">Extra Info</a>
  </li>
 
</ul>
</div>
<div class="col-sm-2">
<button type="button" class="btn "style={{float:'right',color:'white',backgroundColor:'black'}} onClick={this.onCloseModal2} >X</button>
</div>
</div>
<hr style={{color:'black',width:'100%'}}/>
<div class="row">
  <div class="col-sm-12" style={{fontWeight:'bold'}}>Category</div>

</div>
<div class="row">
  <div class ="col-sm-2"></div>
  <div class ="col-sm-5"><img src={Video}/></div>
  <div class ="col-sm-5" style={{fontSize:'16px',color:'grey'}}>Physics Lecture 1 <br/> Extra Information <br/> 10:00 mins</div>
  
</div>
<div class="row mt-5">
  <div class="col-sm-3"></div>
  <div class="col-sm-3"><div class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" >
    Select
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
   
  </div>
</div></div>
  <div class="col-sm-3"><div class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    
  </div>
</div></div>
  <div class="col-sm-3"></div>
</div>
<div class="row mt-5">
  <div class="col-sm-3"></div>
  <div class="col-sm-3"><div class="dropdown">
  <button class="btn btn-outline-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    Select
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Action</a>
    </div>
</div></div>
<div class="col-sm-3"></div>
<div class="col-sm-3"></div>
</div>
<hr class="mt-3"style={{color:'black',width:'100%'}}/>
<div class="row mt-5 mb-0">
  <div class="col-sm-3"style={{fontsize:'8px',color:'#34a4eb'}}>*Required</div>
  <div class="col-sm-5" style={{fontSize:'10px'}}><a href="#">Terms Privacy Policy and Cookie policy</a></div>
  <div class="col-sm-2"><button type="button" class="btn btn-primary"onClick={this.onCloseModal2}>PREVIOUS</button></div>
  <div class="col-sm-2"><button type="button" class="btn btn-primary" onClick={this.onOpenModal3}>NEXT</button></div>
</div>
</Modal>

<Modal isOpen={show}   onClose={this.onCloseModal3} style={{

overlay:{backgroundColor:'lightgrey'},
content:{
 left:'200px',
 right:'200px'
}
}}>
<div class="row">
  <div class="col-sm-4">
<h3>Video Lecture</h3>
</div>
<div class="col-sm-6">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Details</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active "  href="#">Category</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active"href="#">Extra Info</a>
  </li>
 
</ul>
</div>
<div class="col-sm-2">
<button type="button" class="btn "style={{float:'right',color:'white',backgroundColor:'black'}} onClick={this.onCloseModal3} >X</button>
</div>
</div>
<hr style={{color:'black',width:'100%'}}/>
<div class="row">
  <div class="col-sm-12" style={{fontWeight:'bold'}}>Extra Info</div>

</div>
<div class="row">
  <div class ="col-sm-2"></div>
  <div class ="col-sm-5"><img src={Video}/></div>
  <div class ="col-sm-5" style={{fontSize:'16px',color:'grey'}}>Physics Lecture 1 <br/> Extra Information <br/> 10:00 mins</div>
  
</div>
<div class="row mt-3">
  <div class="col-sm-3">

  </div>
  <div class="col-sm-6"><div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
</div>
  <div class="col-sm-3"></div>
</div>
<div class="row mt-3">
  <div class="col-sm-3">

  </div>
  <div class="col-sm-6"><div class="input-group mb-3">
  <div class="input-group-prepend">
    <span class="input-group-text" id="inputGroupFileAddon01">Upload</span>
  </div>
  <div class="custom-file">
    <input type="file" class="custom-file-input" id="inputGroupFile01" aria-describedby="inputGroupFileAddon01"/>
    <label class="custom-file-label" for="inputGroupFile01">Choose file</label>
  </div>
</div>
</div>
  <div class="col-sm-3"></div>
</div>
<hr class="mt-5"style={{color:'black',width:'100%'}}/>
<div class="row mt-5 mb-0">
  <div class="col-sm-3"style={{fontsize:'8px',color:'#34a4eb'}}>*Required</div>
  <div class="col-sm-5" style={{fontSize:'10px'}}><a href="#">Terms Privacy Policy and Cookie policy</a></div>
  <div class="col-sm-2"><button type="button" class="btn btn-primary"onClick={this.onCloseModal3}>PREVIOUS</button></div>
  <div class="col-sm-2"><button type="button" class="btn btn-primary" onClick={this.onOpenModal4}>NEXT</button></div>
</div>
</Modal>
<Modal isOpen={visible}   onClose={this.onCloseModal4} style={{

overlay:{backgroundColor:'lightgrey'},
content:{
 left:'200px',
 right:'200px'
}
}}>
<div class="row">
  <div class="col-sm-4">
<h3>Video Lecture</h3>
</div>
<div class="col-sm-6">
<ul class="nav">
  <li class="nav-item">
    <a class="nav-link active" href="#">Details</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active "  href="#">Category</a>
  </li>
  <li class="nav-item">
    <a class="nav-link active"href="#">Extra Info</a>
  </li>
 
</ul>
</div>
<div class="col-sm-2">
<button type="button" class="btn "style={{float:'right',color:'white',backgroundColor:'black'}} onClick={this.onCloseModal4} >X</button>
</div>
</div>
<hr style={{color:'black',width:'100%'}}/>

<div class="row">
  <div class ="col-sm-2"></div>
  <div class ="col-sm-5"><img src={Video} alt="lecture"/></div>
  <div class ="col-sm-5" style={{fontSize:'16px',color:'grey'}}>Physics Lecture 1 <br/> Extra Information <br/> 10:00 mins</div>
  
</div>
<div class="row mt-5">
  <div class="col-sm-3"></div>
<div class="col-sm-9" style={{color:'blue',fontSize:'18px'}}>Video will be available soon as it gets approval</div>
</div>
<div class="row mt-5"></div>
<div class="row mt-5"></div>
<hr class="mt-5"style={{color:'black',width:'100%'}}/>
<div class="row mt-5 mb-0">
  <div class="col-sm-3"style={{fontsize:'8px',color:'#34a4eb'}}>*Required</div>
  <div class="col-sm-5" style={{fontSize:'10px'}}><a href="#">Terms Privacy Policy and Cookie policy</a></div>
  <div class="col-sm-2"><button type="button" class="btn btn-primary"onClick={this.onCloseModal4}>PREVIOUS</button></div>
  <div class="col-sm-2"><button type="button" class="btn btn-primary" onClick={this.onCloseModal4}>FINISH</button></div>
</div>
</Modal>

</Fragment>

        );


    




}
}
