import React, {Component, Fragment} from 'react';
import './question2.css';
export class Question2 extends Component{
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
  <div class="row mx-auto " style={{marginTop:'70px'}}>
                        <div class="col-lg-12 cpl-md-12 col-sm-12 "><h3>Choose Topic For your Test</h3></div>
                      </div>
<div class="container" style={{marginTop:'50px'}}>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
        <button type="button" class="btn  btn-lg btn-block" >Electric charges and fields</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
        <button type="button" class="btn  btn-lg btn-block" >Gauss Theorem</button>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
        <button type="button" class="btn  btn-lg btn-block" >Electric resistance and Ohm's Law</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
        <button type="button" class="btn  btn-lg btn-block" >Capacitors and Dielectrics</button>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
        <button type="button" class="btn  btn-lg btn-block" >Alternating Current</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
        <button type="button" class="btn  btn-lg btn-block" >DC circuits and measurement</button>
        </div>
    </div>
    <div class="row">
        <div class="col-lg-6 col-md-6 col-sm-12">
        <button type="button" class="btn  btn-lg btn-block">Forces</button>
        </div>
        <div class="col-lg-6 col-md-6 col-sm-12">
        <button type="button" class="btn  btn-lg btn-block" >Ohm's Law</button>
        </div>
    </div>
</div>
            </Fragment>

        );

    }
}