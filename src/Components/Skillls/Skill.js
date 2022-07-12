import React from 'react'

import "./skill.css";


const Skill = (props) => {
  return <div>
      <section id="intro">
                 <div class="container ">
                     
                   <div className="title">
                   <div data-aos="fade-down"
					     data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
                        data-aos-delay="40"
					>
                        <h1> My Special Skills</h1>
                       
                       <div className="container">
                       <div className="row justify-content-center">
           <div className="col-2 line">

           </div>
       </div>
                       </div>
                        </div>

                        <div data-aos="fade-down"
						data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
                        data-aos-delay="10"
					>
                        <p1></p1>
                      </div>  
                   </div>
                   
                 <div className="row">
                 
                   <div className="col-md-4">
                   <div data-aos="fade-down"
						data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
                        data-aos-delay="140"
					>
                     <div className="card  text-center">
                     <img src="https://www.simplilearn.com/ice9/free_resources_article_thumb/full_front_back.jpg" className="card-img-top"></img>
                    <div className="card-body">

                        <h5 className="card-title">Web Development</h5>
                        <p className="card-text"> {props.maindata[0]?.WbDevelopmetDes}</p>
                        <h5 className="card-title">Techniques</h5>
                        <p className="card-text">{props.maindata[0]?.technologies}</p>
                    </div>
                     </div>
                     </div>

                     </div>
                     
                
                     <div className="col-md-4">
                     <div data-aos="fade-down"
						data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
					    data-aos-delay="50"
					>
                     <div className="card  text-center">
                     <img src="https://www.teahub.io/photos/full/87-879470_computer-programming-coding-technology.jpg" className="card-img-top"></img>
                    <div className="card-body">

                        <h5 className="card-title">Computer Programming</h5>
                        <p className="card-text"> {props.maindata[0]?.WbDevelopmetDes}</p>
                        <h5 className="card-title">Techniques</h5>
                        <p className="card-text">{props.maindata[0]?.technologies} </p>
                    </div>
                     </div>
                     </div>
                     </div>
                     <div className="col-md-4">
                     <div data-aos="fade-down"
						data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
                        data-aos-delay="70"
					>
                     <div className="card  text-center">
                     <img src="https://online.stanford.edu/sites/default/files/styles/figure_default/public/2020-06/Statistics-Graduate-Certificate_2.jpg?itok=Z0eVYZxe" className="card-img-top"></img>
                    <div className="card-body">

                        <h5 className="card-title">Statistical Analysis</h5>
                        <p className="card-text"> {props.maindata[0]?.WbDevelopmetDes}</p>
                        <h5 className="card-title">Techniques</h5>
                        <p className="card-text"> {props.maindata[0]?.technologies}</p>
                    </div>
                     </div>
                     </div>
                     </div>
                 </div>
                 </div>
               
                 
             </section>
  

  </div>;
  
}

export default Skill