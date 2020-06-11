import React, {Component, Fragment} from 'react';
import './question3.css';
export class Question3 extends Component{
    render(){
        return(
            <Fragment>
                <div class="container">
                      <div class="card-deck mx-auto" style={{width:'300px',marginTop:'100px'}}>
  <div class="card"style={{backgroundColor:'#ff751a'}}>
    <img src="https://cdn3.iconfinder.com/data/icons/science-114/64/Physics-natural-science-education-128.png" class="card-img-top img-responsive img-fluid mx-auto " style={{width:'80px',height:'80px',paddingTop:'15px'}} alt="..."/>
    <div class="card-body" style={{backgroundColor:'#ff751a'}}>
    <p class="text-center pb-0" style={{fontWeight:'bold'}}>Physics</p>
    </div>
  </div>
  </div>
  </div>
  <div class="row mx-auto " style={{marginTop:'50px'}}>
                        <div class="col-lg-12 cpl-md-12 col-sm-12 "><h3>Topic of The Test</h3></div>
                      </div>
                      <div class="row mx-auto " style={{marginTop:'50px'}}>
                        <div class="col-lg-12 cpl-md-12 col-sm-12 "><h3><span style={{color:'#ff751a'}}>01</span>Electric Charges And Fields<br/>___________________________________</h3></div>
                      </div>
                      <div class="container">
                      <div class="card-deck mt-5">
  <div class="card"style={{backgroundColor:'#ffaa80'}}>
    
    <div class="card-body" style={{backgroundColor:'#ffaa80'}}>
    <p class="text-center pb-0" style={{fontWeight:'bold'}}>Classic<br/> Test</p>
    </div>
  </div>
  <div class="card"style={{backgroundColor:'#ffaa80',marginLeft:'40px'}}>
     
    <div class="card-body"style={{backgroundColor:'#ffaa80'}}>
    <p class="text-center pb-0" style={{fontWeight:'bold'}}>Time Based <br/> Test</p>
    </div>
  </div>
  </div>
  </div>
  <button type="button" class="btn btn-primary mt-5 butttons" style={{backgroundColor:'#ffaa80'}}>Proceed</button>
                      
  </Fragment>
        );
    }
}