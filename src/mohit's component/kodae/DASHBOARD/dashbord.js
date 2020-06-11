import React, {Component, Fragment} from 'react';
import './dashbord.css';
import Grid from '@material-ui/core/Grid';
import { Paper } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
  export class Dashboard extends Component{
      render(){
          return(
              <div>
           
               <div class="row">
                   <div class ="col-xl-2 col-lg-4 col-md-6">
                   <ul class="nav flex-column">
    <li class ="nav-item 
    ">
    <img src="images/logo.png " /></li>              
  <li class="nav-item">
    <a class="nav-link " href="#">Profile</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Home</a>
  </li>
  <li class="nav-item">
    <a class="nav-link" href="#">Popular Videos</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" >Ncert Solutions</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" >Contact Us</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" >Certifications</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" >Ask Questions</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" >App Download</a>
  </li>
  <li class="nav-item">
    <a class="nav-link " href="#" >Change Class</a>
  </li>
</ul>

                   </div>
                   <div class="col-xl-10 col-lg-8 col-md-6 ml-auto">
                  <div class="row">
                    <span class="minutes">0 minutes ago<br/>________________________</span>
                    
                    <span style={{marginTop:'30px'}}><img src="https://cdn0.iconfinder.com/data/icons/start-up-business-line/134/badge__award__achievement_-128.png" style={{width:'40px',height:'40px'}}/></span>
                    <span style={{marginTop:'30px',fontWeight:'bold'}}>Level 1</span>
                    <span style={{marginTop:'30px'}}><img src="https://cdn1.iconfinder.com/data/icons/animal-flat-2/128/animal_fox-forest-128.png" style={{width:'40px',height:'40px',float:'right'}}/></span>
                    <span><div class="dropdown">
  <button class="btn btn-info dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
    More
  </button>
  <div class="dropdown-menu" aria-labelledby="dropdownMenuButton">
    <a class="dropdown-item" href="#">Change class</a>
    <a class="dropdown-item" href="#">Settings</a>
    <a class="dropdown-item" href="#">Logout</a>
  </div>
</div></span>
                    </div>
                  
                                <div class="cardd"style={{marginTop:'70px'}}>
                        <div class="row">
                          <div class="col-lg-6 col-md-6 col-sm-12 mx-auto">
                          <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
   
    <p class="card-text">You have A new Challenge From Rahul.</p>
    <button type="button" class="btn btn-light">Take Challenge</button>
  </div>
</div>
                          </div>
                          <div class="col-lg-6 col-md-6 col-sm-12 mx-auto">
                          <div class="card" style={{width: '18rem'}}>
  <div class="card-body">
    
    <p class="card-text">Earn A new Batch . You are just steps away.</p>
    <button type="button" class="btn btn-light">Take Test</button>
  </div>
</div>
                          </div>
                        </div>
                      </div>
                      <div class="hd3">
                      <div class="row">
                        <div class="col-lg-12 col-md-12 cl-sm-12 mx-auto">What Do You Want To Learn Today?</div>
                      </div>
                      </div>
                     

                     
                      <div class="images">
                      <Grid container spacing={0}  >
                      <Grid item xs={3}>
        <img src="https://image.flaticon.com/icons/svg/2923/2923578.svg" style={{backgroundColor:'orange'}}/>

        </Grid>
        <Grid item xs={3}>
        <img src="https://image.flaticon.com/icons/svg/2928/2928162.svg" style={{backgroundColor:'#7070db'}}/>
         </Grid>
        <Grid item xs={3}>
       <img src="https://image.flaticon.com/icons/svg/2930/2930358.svg" style={{backgroundColor:'skyblue'}}/>
        </Grid>
        <Grid item xs={3}>
        < img src="https://image.flaticon.com/icons/svg/2957/2957807.svg"style={{backgroundColor:'lightgreen'}}/>
        </Grid>
                      
                     
                     
        </Grid>

        <div class="hd3">
                      <div class="row">
                        <div class="col-lg-12 col-md-12 cl-sm-12 mx-auto">What Would You Like to do Today?</div>
                      </div>
                      </div>

                  
                     <div class="carddd">
                       
                         
                     <div class="card-deck">
  <div class="card">
    <img src="https://cdn1.iconfinder.com/data/icons/education-216/64/file-document-test-education-archive-exam-pen-128.png" class="card-img-top img-responsive img-fluid mx-auto " style={{width:'80px',height:'80px',paddingTop:'15px'}} alt="..."/>
    <div class="card-body" style={{backgroundColor:'white'}}>
    <a href="#" class="btn btn-primary">Take Test</a>
    </div>
  </div>
  <div class="card">
    <img src="https://cdn1.iconfinder.com/data/icons/language-studies-thick-outline/33/language-10-128.png" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'80px',height:'80px',paddingTop:'15px'}} alt="..."/>
    <div class="card-body"style={{backgroundColor:'white'}}>
    <a href="#" class="btn btn-primary">Unlimited Practice</a>
    </div>
  </div>
  <div class="card">
    <img src="https://cdn4.iconfinder.com/data/icons/finance-and-politics-2/128/guess_worry_concern_guessing_doubt-128.png" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'80px',height:'80px',paddingTop:'15px'}} alt=""/>
    <div class="card-body"style={{backgroundColor:'white'}}>
    <a href="#" class="btn btn-primary">Ask A doubt</a>
    </div>
  </div>
</div>
                     </div>

                     <div class="hd3">
                      <div class="row">
                        <div class="col-lg-12 col-md-12 cl-sm-12 mx-auto">Top picks For You !</div>
                      </div>
                      </div>
                        
                          
                      <div class="carddd">
                       
                         
                       <div class="card-deck">
    <div class="card"style={{height:'300px'}} >
    <img src="data:image/jpeg;base64,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" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'auto',height:'auto',borderRadius:'0px'}} alt="..."/>
      <div class="card-body" style={{backgroundColor:'white'}}>

       <p class="text-center pb-0" style={{fontWeight:'bold'}}>Equilibrium</p>
      </div>
    </div>
    <div class="card"style={{height:'300px'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcR4tRgxij95dxkppc3jKiJYAf-ST0_-r6aUOu2g7oPxVaAIwt5f&usqp=CAU" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'auto',height:'auto',borderRadius:'0px'}} alt="..."/>
      <div class="card-body"style={{backgroundColor:'white'}}>
      <p class="text-center pb-0" style={{fontWeight:'bold'}}>Laws Of Reflection</p>
      </div>
    </div>
    <div class="card"style={{height:'300px'}}>
      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6TLZkGgHZLCfSOk3AxMCV3i5Kxmv0ot1Jrib8xSfSdqZTrzq7&usqp=CAU" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'auto',height:'auto',borderRadius:'0px'}} alt=""/>
      <div class="card-body"style={{backgroundColor:'white'}}>
      <p class="text-center pb-0" style={{fontWeight:'bold'}}>Laws of Motion</p>
      </div>
    </div>
  </div>
            
                          
                          
                          
              
                        </div>
                      </div>
                   </div>
               </div>
           </div>
                
              
          );

      }
  }