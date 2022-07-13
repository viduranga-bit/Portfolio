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

    <div className='back' id="projectcard">
    
    <div className='container' >
    <div className='row'>
      
    <div className="title">
                   <div data-aos="fade-down"
					     data-aos-offset="170"
						data-aos-easing="ease-in-sine" 
                        data-aos-delay="40"
					>
                        <h1> Projects</h1>
                       
                       <div className="container">
                       <div className="row justify-content-center">
           <div className="col-3 line">

           </div>
       </div>
                       </div>
                        </div>

                   </div>
          {projectdata.map((doc ,index) =>{
      return(

        

<div class="card mb-4" id='new' key ={doc.id} >
  
  <div class="row no-gutters">
  
    <div className="col-md-5 " id='image' >
      <img src={doc.project_image_link} class="card-img" alt="..."/>
    </div>
    <div class="col-md-6  text">
    
        
        <h5 class="card-title  ">{doc.project_name}</h5>
        <h6 class="card-title techniques">{doc.techniques}</h6>
        <p class="card-text descrip">{doc.project_description}</p>
        <button type="button" class="btn btn-primary btn-sm button-87">Live Preview</button>
        <button type="button"  class="btn btn-secondary btn-sm button-87">Github Repo</button>
        
      </div>
    </div>
  </div>

              );
          })}
          
    
  
          </div>

          </div>
        

          </div>
  )
}

export default ProjectCards;