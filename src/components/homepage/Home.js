import React , { Component } from "react";
import fire from "../../config/fire";

class Home extends Component{
constructor(props)
{
    super(props)
    this.state={
        
    }
}
logout(){
    fire.auth().signOut();
}
render()
{
    return(
       <div>
       <head>
	    <a href="https://icons8.com/icon/UUkjUn8c_bwn/teacher"></a>

</head>
{/* <body> */}
          
<div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel">
  <ol class="carousel-indicators">
    <li data-target="#carouselExampleIndicators" data-slide-to="0" class="active"></li>
    <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
   
  </ol>
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src="header.jpg" alt="First slide" />
      <div class="carousel-caption d-none d-md-block">

  </div>
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src="view1.jpg" alt="Second slide" />
    </div>
  
  </div>
  <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
<section>
	<div class="container d-flex justify-content-center gap100">
		<div class="col-md-10 text-center text-primary mt-5">
			<h1> About Kodate</h1>
			 <p class="text-secondary" class="lead">Kodate is the brain child of a few IIT alumni who have been in the education sector and at the cutting edge of computer industry for more than two decade. It is created out of passion to bring out the genius in every child.</p>
			         <button type="button" class="btn btn-outline-info">Know more</button>
			
	</div>
    </div>
</section>


<section class="team">
	<div class="container my-3 py-5 text-center text-primary">
		<div class="row mb-5">
			<div class="col">
				<h1> Overview </h1>
				<h4><p class="text-secondary" class="lead">Unlimited practice Adaptive, interactive tests that help students master each chapter. Recommended videos </p></h4>
			</div>
		</div>
			<div class="mt-4">
			</div>
			<div class="row">
				<div class="col-lg-3 col-md-6">
					<div class="card text-left">
						<div class="card-body">
							
							
		<img  class="family" src="https://img.icons8.com/bubbles/100/000000/family.png"/>
				<h3 class="text-center"> For Family</h3>



						</div>
					</div>
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="card text-left">
					<div class="card-body">
				
<img  class="teacher" src="https://img.icons8.com/bubbles/100/000000/training.png"/>
				<h3 class="text-center"> For Teachers</h3>

						
					</div>
				</div> 
			</div>
			<div class="col-lg-3 col-md-6">
				<div class="card text-left">
					<div class="card-body">
						
						<img  class ="school" src="https://img.icons8.com/bubbles/100/000000/school.png"/>
				<h3 class="text-center"> For schools</h3>

						</div>
					</div>
		</div>
		<div class="col-lg-3 col-md-6">
				<div class="card justify-content">
					<div class="card-body text-left">
						
						<img  class="student" src="https://img.icons8.com/bubbles/100/000000/student-male.png"/>
<h3 class="text-center"> For students</h3>
					</div>
				</div> 
			</div>
	</div>
    </div>
</section>

<div class="container">
	<div class="row">
		
	</div>
	
	<div class="block">
      <div class="row">
        <div class="span4">
          <img src="test.jpg" class="img-fluid img-left" alt="Responsive image" />

          <div class="content-heading text-center"><h3>Unlimited Practice</h3></div>
          <h5><p class="text-black-50">Adaptive, interactive tests that help students master each chapter. Recommended videos prompt students to correct mistakes in a practice session, enabling long lasting learning.</p></h5>
          <button type="button" class="btn btn-outline-primary">Explore Now</button>
        </div>
     </div>
     </div>
     <div class="jumbotron jumbotron-blue">
  <h1 class="display-4">Learn to code</h1>
  <p class="lead">Each lesson contains slides that are designed to enhance your learning experience
by creating a visual representation of the concepts in action.</p>
  <hr class="my-4" />
  <p>It uses utility classes for typography and spacing to space content out within the larger container.</p>
  <p class="lead">
   <button type="button" class="btn btn-outline-secondary">Get Started</button>
  </p>
</div>
</div>

 <div class="container">
	<div class="row">
		
	</div>
	
	<div class="block">
      <div class="row">
        <div class="span4">
          <img src="5.jpg" class="img-fluid img-left" alt="Responsive image" />

          <div class="content-heading text-center "><h3>Unlimited Practice</h3></div>
          <h5><p class="text-black-50">Adaptive, interactive tests that help students master each chapter. Recommended videos prompt students to correct mistakes in a practice session, enabling long lasting learning.</p></h5>
          <button type="button" class="btn btn-outline-primary">Explore Now</button>
        </div>
     </div>
     </div>
     <div class="mt-4">
     </div>
  <div class="jumbotron jumbotron-fluid">
  <div class="container">
    <h2 class="display-4">Get Started</h2>
    <p class="lead">The exciting world of programming awaits you</p>
     <button type="button" class="btn btn-outline-secondary">Explore Courses</button>

  </div>
</div>
<div class="mt-4">
  </div>
  <br />
<footer class="page-footer font-small blue pt-4">

  <div class="container-fluid text-center text-md-left">


    <div class="row">


      <div class="col-md-6 mt-md-0 mt-3">


        <h5 class="text-uppercase">Footer Content</h5>
        <p>Here you can use rows and columns to organize your footer content.</p>

      </div>
    

      <hr class="clearfix w-100 d-md-none pb-3" />

    
      <div class="col-md-3 mb-md-0 mb-3">

    
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
      <div class="col-md-3 mb-md-0 mb-3">

       
        <h5 class="text-uppercase">Links</h5>

        <ul class="list-unstyled">
          <li>
            <a href="#!">Link 1</a>
          </li>
          <li>
            <a href="#!">Link 2</a>
          </li>
          <li>
            <a href="#!">Link 3</a>
          </li>
          <li>
            <a href="#!">Link 4</a>
          </li>
        </ul>

      </div>
  
    </div>
  

  </div>
  
  <div class="footer-copyright text-center py-3">© 2020 Copyright:
    <a href="https://mdbootstrap.com/"> MDBootstrap.com</a>
  </div>
  
</footer>

{/* </body> */}
</div>
</div>

    )
}
}
export default Home;