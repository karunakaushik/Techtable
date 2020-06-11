import React, {Component, Fragment} from 'react';
import './Liveclass1.css';
import $ from 'jquery';
export class Live1 extends Component{
    render(){

    
        return(
            <Fragment>
                <div class="row">
                    <div class=" col-xl-2 col-lg-2 col-md-4 col-sm-10">
                <ul class="nav flex-column">
                
    <li class="nav-item">       
        <figure class="figure">
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRfFgGuQPgWBizrGjcxow3mWOvf_E06To1rkMu04cSbrvk3v8uK&usqp=CAU" class="figure-img img-fluid rounded-circle" alt=""/>
  <figcaption class="figure-caption text-center">Mr.Mohan Dash <br/>
  Physics Instructor</figcaption>
</figure>
</li>
                  
  <li class="nav-item">
    <a class="nav-link " href="#"><i class="fa fa-commenting-o" ></i> Clear Doubts</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="fa fa-video-camera" ></i> Video Lectures</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#"><i class="fa fa-sticky-note" ></i> ATP Series</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" ><i class="fa fa-info-circle" ></i>Announcements</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" ><i class="fa fa-check-square" ></i> Reports</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" ><i class="fa fa-television" ></i> Live Classes</a>
  </li>
     </ul>
 </div>

 <div class=" col-xl-10 col-lg-10 col-md-8 col-sm-12 ml-auto  ">
   
<div class="row"style={{backgroundColor:'#e6e6e6',height:'50px',}}>
  <div class="col-lg-12 col-md-12 col-sm-12 text-left py-2"style={{fontWeight:'bold'}}>
    Live Classes
  </div>

</div>


<div class="container live mx-auto">
  <div class="col-xl-12 col-lg-12 ">
                      <div class="card-deck ">
  <div class="card">
    <img src="https://image.flaticon.com/icons/svg/2088/2088617.svg" class="card-img-top img-responsive img-fluid mx-auto " style={{width:'80px',height:'80px',paddingTop:'15px'}} alt="..."/>
    <div class="card-body" >
    <button type="button" class="btn btn-outline-secondary schedule"  data-target="#exampleModal" data-toggle="modal" style={{color:'white',fontWeight:'bold',fontSize:'15px'}}>Schedule Class</button>
    </div>
   
  </div>
  <div class="card">
    <img src="https://image.flaticon.com/icons/svg/854/854285.svg" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'80px',height:'80px',paddingTop:'15px'}} alt="..."/>
    <div class="card-body">
    <button type="button" class="btn btn-outline-secondary" style={{color:'white',fontWeight:'bold',fontSize:'15px'}}>Start Now</button>
    </div>
  </div>
  <div class="card">
    <img src="https://image.flaticon.com/icons/svg/709/709612.svg" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'80px',height:'80px',paddingTop:'15px'}} alt=""/>
    <div class="card-body">
    <button type="button" class="btn btn-outline-secondary" style={{color:'white',fontWeight:'bold',fontSize:'15px'}}>Join Now</button>
    </div>
  </div>
  </div>
  </div>
  
 </div>
 
 </div>
 </div>
 

 

            </Fragment>
        );


        
    }
}