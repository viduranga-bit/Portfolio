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
      
      
     <div className="card-columns" >
          {projectdata.map((doc ,index) =>{
      return(

        
    
<div className="card " key ={doc.id}>
  <img src={doc.project_image_link} className="card-img-top" alt="..."/>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text">{doc.project_description}</p>
  </div>
  <div class="card-footer">
    <small class="text-muted">{doc.project_name}</small>
      </div>
</div>



              );
          })}
          
    
  
          </div>


          </div>

  
  )
}

export default ProjectCards;