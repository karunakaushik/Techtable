import React, {Component, Fragment} from 'react';
import './Liveclass2.css';
export class Live2 extends Component{
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
 <form >
     <h4 style={{textAlign:'left',marginLeft:'10px'}}>Schedule Class</h4>
     <hr style={{width:'100%',color:'black'}}/>
 <div class="form-group row mt-5">
    <label for="Topic" class="col-sm-3 col-form-label">Topic of the Class</label>
    <div class="col-sm-8">
      <input type="text" class="form-control fields" id="Topic"/>
    </div>
  </div>
  <div class="form-group row mt-5">
    <label for="Start" class="col-sm-2 col-form-label">Start</label>
    <div class="col-sm-3">
      <input type="text" class="form-control fields" id="Start" value="May 4,2020"/>
    </div>
    <label for="Duration" class="col-sm-2 col-form-label">Duration</label>
    <div class="col-sm-2">
      <input type="text" class="form-control fields" id="Duration" value="1h"/>
    </div>
  </div>
  <div class="form-group row mt-5">
    <label for="Password" class="col-sm-2 col-form-label">Password</label>
    <div class="col-sm-2">
      <input type="Password" class="form-control fields" id="Password" />
    </div>
    <label for="waiting" class="col-sm-3 col-form-label">Enable waiting Room</label>
    <div class="col-sm-1">
      <input type="radio" class="form-check-input fields" id="waiting" />
    </div>
    </div>
    <div class="form-group row mt-5">
    <label for="video" class="col-sm-2 col-form-label">Video</label>
    <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            On
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            Off
          </label>
        </div><div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            External Webcam
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            Computer Webcam
          </label>
        </div>
    </div>
    <div class="form-group row mt-0">
    <label for="video" class="col-sm-2 col-form-label" style={{fontWeight:'normal'}}>Students</label>
    <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            On
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            Off
          </label>
        </div>
</div>
<div class="form-group row mt-5">
    <label for="audio" class="col-sm-2 col-form-label">Audio</label>
    <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            On
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            Off
          </label>
        </div><div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            Microphone
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            Computer Audio
          </label>
        </div>
    </div>
    <div class="form-group row mt-0">
    <label for="video" class="col-sm-2 col-form-label" style={{fontWeight:'normal'}}>Students</label>
    <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            On
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-1" for="gridRadios1">
            Off
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
          <label class="form-check-label col-sm-2" for="gridRadios1">
            Mute Student
          </label>
        </div>
</div>
<div class="form-group row">
<label for="video" class="col-sm-6 col-form-label" style={{fontWeight:'normal'}}>Automatically record meeting On the local Computer</label>
    <div class="form-check">
          <input class="form-check-input " type="radio" name="gridRadios" id="gridRadios1" value="option1"/>
         
        </div>
</div>

<div class="row">
    <div class="col-sm-6">
    <button type="button" class="btn btn-primary btn-lg">Schedule</button>
    </div>
    <div class="col-sm-6">
    <button type="button" class="btn btn-light btn-lg">Cancel</button>
    </div>
  </div>
</form>
   </div>
   </div>          
          </Fragment>
      );

  }
}