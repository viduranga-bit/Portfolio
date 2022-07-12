import React from 'react';
import "./Aboutme.css";

const AboutMe = (props) => {
  return <div className='background' id='about'>
    
  <div className='container'>

  <div className="title">
                   <div data-aos="fade-down"
					     data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
                        data-aos-delay="40"
					>
                        <h1> About Me</h1>
                       
                       <div className="container">
                       <div className="row justify-content-center">
           <div className="col-2 line">

           </div>
       </div>
                       </div>
                        </div> 
                   </div>
    <div class="card mb-3" >
  <div class="row no-gutters">
    
    <div class="col-md-8">
      <div class="card-body">
        <h5 className="card-title">Amith Viduranga Rathnayaka</h5>
        <p class="card-text">When </p>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>

    <div class="col-md-4">
      <img src={props.maindata[0]?.image} class="card-img" alt="..."/>
    </div>
  </div>
</div> 
</div> 
</div>;
  
}

export default AboutMe