import React, {Component, Fragment} from 'react';
import './question1.css';
export class Question1 extends Component{
    render(){
        return(
            <Fragment>
                
                    <div>
                    <img src="images/logo.png" alt="Kodate" class="center "/>
                    </div>
                    <br/>
                    <div class="row mx-auto" style={{marginTop:'280px',marginRight:'150px'}}>
                        <div class="col-lg-12 cpl-md-12 col-sm-12 "><h3>Choose Subject For your Test</h3></div>
                      </div>
                      <div class="container">
                      <div class="card-deck mt-5">
  <div class="card"style={{backgroundColor:'#ff751a'}}>
    <img src="https://cdn3.iconfinder.com/data/icons/science-114/64/Physics-natural-science-education-128.png" class="card-img-top img-responsive img-fluid mx-auto " style={{width:'80px',height:'80px',paddingTop:'15px'}} alt="..."/>
    <div class="card-body" style={{backgroundColor:'#ff751a'}}>
    <p class="text-center pb-0" style={{fontWeight:'bold'}}>Physics</p>
    </div>
  </div>
  <div class="card"style={{backgroundColor:'#4db8ff'}}>
    <img src="https://cdn3.iconfinder.com/data/icons/writing-and-art-tools-1/85/compass_tool_divider-128.png" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'80px',height:'80px',paddingTop:'15px'}} alt="..."/>
    <div class="card-body"style={{backgroundColor:'#4db8ff'}}>
    <p class="text-center pb-0" style={{fontWeight:'bold'}}>Mathematics</p>
    </div>
  </div>
  <div class="card"style={{backgroundColor:'#33ff33'}}>
    <img src="https://cdn4.iconfinder.com/data/icons/gardening-planting-1/128/534_gardening-patio-garden-plants-128.png" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'80px',height:'80px',paddingTop:'15px'}} alt=""/>
    <div class="card-body"style={{backgroundColor:'#33ff33'}}>
    <p class="text-center pb-0" style={{fontWeight:'bold'}}>Biology</p>
    </div>
  </div>
  <div class="card" style={{backgroundColor:'#944dff'}}>
    <img src="https://cdn0.iconfinder.com/data/icons/education-452/42/education-05-128.png" class="card-img-top img-responsive img-fluid mx-auto" style={{width:'80px',height:'80px',paddingTop:'15px'}} alt=""/>
    <div class="card-body"style={{backgroundColor:'#944dff'}}>
    <p class="text-center pb-0" style={{fontWeight:'bold'}}>Chemistry</p>
    </div>
  </div>

</div>
           </div>          

                </Fragment>
            
        );

    }
}