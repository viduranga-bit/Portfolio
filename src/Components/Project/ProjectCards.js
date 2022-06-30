import React, { useEffect, useState } from 'react'
import firebase from "../../firebase";
import "firebase/firestore";

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
    <div>
      <pre>{JSON.stringify(projectdata,undefined,1)}</pre> 

      <tbody>
          {projectdata.map((doc ,index) =>{
              return(
                 <tr key ={doc.id}>
                <td>{index+1}</td>
                <td>{doc.project_name}</td>
                <td>{doc.project_id}</td>
                </tr>
              );
          })}
          
        </tbody>

        <div class="card-deck">
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title"></h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card titlessd</h5>
      <p class="card-text">This card has supporting text below as a natural lead-in to additional content.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
  <div class="card">
    <img src="..." class="card-img-top" alt="..."/>
    <div class="card-body">
      <h5 class="card-title">Card title</h5>
      <p class="card-text">This is a wider card with supporting text below as a natural lead-in to additional content. This card has even longer content than the first to show that equal height action.</p>
    </div>
    <div class="card-footer">
      <small class="text-muted">Last updated 3 mins ago</small>
    </div>
  </div>
</div>




    </div>
  )
}

export default ProjectCards