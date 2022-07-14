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
    <div class="card mb-3 backabout"
     >
  <div class="row no-gutters">
    
    <div class="col-md-8 textarea">
      
        <h1 className="card-title">Amith Viduranga Rathnayaka</h1>
        <h2 className="card-title-intro"> Full Stack Developer | Flutter Developer</h2>
        <div className="socoal-buttons">
                            <a
                              href=""
                              className="btn btn-just-icon btn-link btn-dribbble"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-github" />
                            </a>
                            <a
                              href=""
                              className="btn btn-just-icon btn-link btn-dribbble"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-linkedin" />
                            </a>
                            <a
                              href=""
                              className="btn btn-just-icon btn-link btn-twitter"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-twitter" />
                            </a>
                            <a
                              href=""
                              className="btn btn-just-icon btn-link btn-twitter"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-instagram" />
                            </a>
                            <a
                              href=""
                              className="btn btn-just-icon btn-link btn-twitter"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-stack-overflow" />
                            </a>
                            <a
                              href=""
                              className="btn btn-just-icon btn-link btn-pinterest"
                              rel="noopener noreferrer"
                              target="_blank"
                            >
                              <i className="fab fa-facebook" />
                            </a>
                          </div>
        <div className='cardname'>

        <h2 className="card-title-intro1"> {props.maindata[0]?.degree} </h2>
        <h3 className="card-title-intro1"> {props.maindata[0]?.university} </h3>
        <h4 class="card-text">{props.maindata[0]?.Description} </h4>

       
        </div>
       
         <div className='buttoncenter'>
          <a href='http://s17.sci.pdn.ac.lk/amithr' rel="noopener noreferrer" target="_blank"
         type="button"  className='button-87'>University Profile</a>
         </div>
      
    </div>

    <div class="col-md-4 image">
      <img src={props.maindata[0]?.image} class="card-img  imagenew" alt="..."/>
    </div>
  </div>
</div> 
</div> 
</div>;
  
}

export default AboutMe