import React from 'react';

import './Page2.css';
import Logo from './Capture.PNG';
import Solid from './solid.PNG';
import Wave from './wave.PNG';




function Page2(){

return (

  <>
       <nav class="navbar navbar-expand-lg navbar-light bg-white">
        <a class="navbar-brand" href="#">
          <img class="logoimg" src={Logo} width="200" height="70" alt=""/>
          
         
        </a>
        </nav>
        <a href="page1" class="btn1 ">
        <svg class="bi bi-arrow-left-circle" width="3em" height="3em" viewBox="0 0 16 16" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
  <path fill-rule="evenodd" d="M8 15A7 7 0 1 0 8 1a7 7 0 0 0 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
  <path fill-rule="evenodd" d="M8.354 11.354a.5.5 0 0 0 0-.708L5.707 8l2.647-2.646a.5.5 0 1 0-.708-.708l-3 3a.5.5 0 0 0 0 .708l3 3a.5.5 0 0 0 .708 0z"/>
  <path fill-rule="evenodd" d="M11.5 8a.5.5 0 0 0-.5-.5H6a.5.5 0 0 0 0 1h5a.5.5 0 0 0 .5-.5z"/>
</svg>
        </a>

<div class="wrapper">
	

<div></div>
<div>
		<h4 class="heading2"  ><span > 07 </span> A force 10 N act on the body and body is<br/>displaced by 10m. The angle between <br/>force and displacement and given below.<br/>Calculate the work done  </h4>
    <table class="tableimg" >
  
  <tr>
    <th style={{width:'30%'}}>Angle</th>
    <th >30</th>
    <th >45</th>
    <th >60</th>
    <th >90</th>
  </tr>
  <tr>
    <th style={{width:'30%'}}>Work<br/>Done</th>
    <td ></td>
    <td ></td>
    <td ></td>
    <td ></td>

  </tr>
</table>

</div>
<div></div>



<div></div>
<div>
		<h4 class="heading2"  ><span > 08 </span> Materials like plastic can be changed<br/>by rubbing them with suitable <br/>materials.  </h4>
		 <form class="radioalign">  
        
            
            <div class="radio">
              <label class="labelc" ><input type="radio" name="optradio" /> True   </label>
            </div>
            <div class="radio">
              <label class="labelc" ><input type="radio" name="optradio"/> False   </label>
            </div>
            
            
          </form>

</div>
<div></div>




<div></div>
<div>
		<h4 class="heading2"  ><span > 09 </span> Charge can neither be.... no..... </h4>
		 <form class="radioalign">  
        
            
            <div class="radio">
              <label class="labelc" ><input type="radio" name="optradio" /> created,destroyed </label>
            </div>
            <div class="radio">
              <label class="labelc" ><input type="radio" name="optradio"/> positive,negative </label>
            </div>
            <div class="radio ">
              <label class="labelc" ><input type="radio" name="optradio" /> negative,postive  </label>
            </div>
            <div class="radio ">
              <label class="labelc" ><input type="radio" name="optradio" /> None of these  </label>
            </div>
            
          </form>

</div>
<div></div>




<div></div>
<div>
		<h4 class="heading2"  ><span > 10 </span> Match the entries of column 1 with <br/>column </h4>
    <table class="table table-bordered" style={{marginLeft:'5%'}}>
    <tbody>
      <tr>
        <td>1. Light energy to bulb<br/>electrical energy</td>
        <td>a)  electric bulb</td>
        
      </tr>
    
   
      <tr>
        <td>2. electric energy to<br/> light energy</td>
        <td>b)  car engine</td>
        
      </tr>
      <tr>
        <td>3. heat energy to <br/>mechanical energy</td>
        <td>c) solar cell</td>
       
      </tr>
      <tr>
        <td>4. chemical energy to <br/>mechanical energy</td>
        <td>d) steam engine</td>
       
      </tr>
      
     
    </tbody>
  </table>
  
  
</div>
<div></div>





<div></div>
<div>
		<h4 class="heading2"  ><span > 11 </span>  Aluminium metal is:                       <br/></h4>
		 <form class="radioalign">  
        
            
            <div class="radio">
              <label class="labelc" ><input type="radio" name="optradio" /> magnetic substance  </label>
            </div>
            <div class="radio">
              <label class="labelc" ><input type="radio" name="optradio"/> bad conductor of heat  </label>
            </div>
            <div class="radio ">
              <label class="labelc" ><input type="radio" name="optradio" /> bad conductor of electricity </label>
            </div>
            <div class="radio ">
              <label class="labelc" ><input type="radio" name="optradio" /> good conductor of electricity </label>
            </div>
            
          </form>

</div>
<div></div>





<div></div>
<div>
		<h4 class="heading2"  ><span > 12 </span> Wave 2 will create a.... sound than <br/>wave 1</h4>

    <img class="centerimglogo"  src={Wave} alt=""/>
		 <form class="radioalign">  
        
            
            <div class="radio">
              <label class="labelc" ><input type="radio" name="optradio" /> Louder    </label>
            </div>
            <div class="radio">
              <label class="labelc" ><input type="radio" name="optradio"/> quieter  </label>
            </div>
            <div class="radio ">
              <label class="labelc" ><input type="radio" name="optradio" />  lower pitch </label>
            </div>
            <div class="radio ">
              <label class="labelc" ><input  class="inputc" type="radio" name="optradio" /> higher pitch   </label>
            </div>
            
          </form>

</div>
<div></div>





































</div>

<div class="center">
  <div class="pagination">
  
  <a href="/page1">1</a>
  <a style={{marginLeft:'5px'}}href="/page2">2</a>
  <button type="button" class="btn  btn-lg" style={{backgroundColor:'#ff751a',marginLeft:'70px',color:'white',marginBottom:'60px'}}> Submit</button>


  
  
  </div>
</div>



        </>

  



















   

 )



};



export default Page2;



