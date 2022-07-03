import React, { useEffect, useState } from 'react'
import firebase from "../../firebase";
import "firebase/firestore";
import './ProjectCards.css'



const ProjectCards = () => {

  const [projectdata,setprojectdata] = useState([])
  
  useEffect(() => {
    const fetchdata = async () => {
      const db = firebase.firestore();

      const project = await db.collection("projects").get();
      setprojectdata(project.docs.map((doc) => doc.data()));
   
       };
    fetchdata();
  }, []);
   

  return (

    
    <div className='container' >
    <div className='row'>
      
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

                   </div>
          {projectdata.map((doc ,index) =>{
      return(

        

<div class="card mb-4" key ={doc.id} >
  <div class="row no-gutters">
    <div class="col-md-5">
      <img src={doc.project_image_link} class="card-img" alt="..."/>
    </div>
    <div class="col-md-6">
      <div class="card-body">
        <h5 class="card-title">{doc.project_description}</h5>
        <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
        <button type="button" class="btn btn-primary btn-sm">Small button</button>
        <button type="button" class="btn btn-secondary btn-sm">Small button</button>
        <p class="card-text"><small class="text-muted">Last updated 3 mins ago</small></p>
      </div>
    </div>
  </div>
</div>

              );
          })}
          
    
  
          </div>

          </div>
        

  
  )
}

export default ProjectCards;