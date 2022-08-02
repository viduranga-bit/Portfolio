import React, { useEffect, useState } from 'react'
import firebase from "../../firebase";
import "firebase/firestore";
import './ProjectCards.css'
import {
  MDBTabs,
  MDBTabsItem,
  MDBTabsLink,
  MDBTabsContent,
  MDBTabsPane
} from 'mdb-react-ui-kit';


const ProjectCards = () => {
  const [basicActive, setBasicActive] = useState('tab1');

  const handleBasicClick = (value: string) => {
    if (value === basicActive) {
      return;
    }

    setBasicActive(value);
  };
  const [projectdata,setprojectdata] = useState([])
  
  useEffect(() => {
    const fetchdata = async () => {
      const db = firebase.firestore();

      const project = await db.collection("projects").get();
      setprojectdata(project.docs.map((doc) => doc.data()));
   
       };
    fetchdata();
  }, []);
  
  const [projectdataMobile,setprojectdataMobile] = useState([])
  
  useEffect(() => {
    const fetchdata = async () => {
      const db = firebase.firestore();

      const projectMobile = await db.collection("projectsMobile").get();
      setprojectdataMobile(projectMobile.docs.map((doc) => doc.data()));
   
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

       <div>
       
       </div>
                       </div>
                        </div>

                   </div>
      <div className="pills">       
       <MDBTabs pills className='mb-3'>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab1')} active={basicActive === 'tab1'}>
            Web 
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab2')} active={basicActive === 'tab2'}>
            Mobile
          </MDBTabsLink>
        </MDBTabsItem>
        <MDBTabsItem>
          <MDBTabsLink onClick={() => handleBasicClick('tab3')} active={basicActive === 'tab3'}>
            Desktop
          </MDBTabsLink>
        </MDBTabsItem>
      </MDBTabs>

      <MDBTabsContent>
        <MDBTabsPane show={basicActive === 'tab1'}>
          
  {projectdata.map((doc ,index) =>{
      return(
<div className="container">
<div class="card mb-4" id='new' key ={doc.id} >
  
  <div class="row no-gutters">
  
    <div className="col-md-5 " id='image' >
      <img src={doc.project_image_link} class="card-img" alt="..."/>
    </div>
    <div class="col-md-6 text">
    
        
        <h5 class="card-title  ">{doc.project_name}</h5>
        <h6 class="card-title techniques">{doc.techniques}</h6>
        <p class="card-text">{doc.project_description}</p>
      <a  rel="noopener noreferrer" target="_blank"href={doc.live_preview_link}><button type="button" class="btn btn-primary btn-sm button-87">Live Preview</button></a>
       <a  rel="noopener noreferrer" target="_blank" href={doc.github_link}> <button type="button"  class="btn btn-secondary btn-sm button-87">Github Repo</button></a>
        
      </div>
    </div>
  </div>

 </div>

              );
          })}
          
    </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab2'}>
                  
  {projectdataMobile.map((doc ,index) =>{
      return(
<div className="container">
<div class="card mb-4" id='new' key ={doc.id} >
  
  <div class="row no-gutters">
  
    <div className="col-md-5 " id='image' >
      <img src={doc.project_image_link} class="card-img" alt="..."/>
    </div>

  
    <div class="col-md-6 text">
    
        
        <h5 class="card-title  ">{doc.project_name}</h5>
        <h6 class="card-title techniques">{doc.techniques}</h6>
        <p class="card-text">{doc.project_description}</p>
       <a  rel="noopener noreferrer" target="_blank" href={doc.github_link}> <button type="button"  class="btn btn-secondary btn-sm button-87">Github Repo</button></a>
        
      </div>
    </div>
  </div>

 </div>

              );
          })}
          

        </MDBTabsPane>
        <MDBTabsPane show={basicActive === 'tab3'}></MDBTabsPane>
      </MDBTabsContent>
  
    </div>
          
  
          </div>

          </div>
        

          </div>
  )
}

export default ProjectCards;