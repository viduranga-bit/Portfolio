import meter1 from "../../assests/meter1.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./skill.css";
import React, { useEffect, useState } from 'react'
import firebase from "../../firebase";
import "firebase/firestore";


const Skill = (props) => {

    const [skilldata,setskilldata] = useState([])
    const [skillIcondata,setskillIcondata] = useState([])
  
  useEffect(() => {
    const fetchdata = async () => {
      const db = firebase.firestore();

      const skills = await db.collection("skills").get();
      setskilldata(skills.docs.map((doc) => doc.data()));

      const skillicon = await db.collection("skillIcon").get();
      setskillIcondata(skillicon.docs.map((icondoc) => icondoc.data()));
   
       };
    fetchdata();
  }, []);


    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
        
      };

      const responsive2 = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 10
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 10
        },
        mobile: {
          breakpoint: { max: 484, min: 0 },
          items: 4
        }
      };
     
      return (
        <section className="skill" id="skills">
            <div className="container ">
                <div className="row">
                    <div className="col-12 ">
                        <div className="skill-bx wow zoomIn ">
                            <h2>SKILLS</h2>
                            <p>{props.maindata[1]?.description}<br></br>{props.maindata[1]?.description2}</p>
                            
                         

                          
                            <Carousel responsive={responsive}  autoPlaySpeed={500} infinite={true}  ssr={true} >
                            {skilldata.map((doc ,index) =>{
                              return(
                                <div className="item"  key={doc.id}>
                                    <img src={meter1} alt="Image" />
                                    <h5>{doc.Description}</h5>
                                    <h6>{doc.Value}</h6>
                                    <h4>Techniques</h4>
                                    <h7>{doc.Techniques}</h7>
                                </div>
                               
                               );
                            })}

                            </Carousel>
                            <div class="container">
                            <div class="row slider">
                            <Carousel responsive={responsive2} autoPlay={true} autoPlaySpeed={1000} infinite={true} removeArrowOnDeviceType={["tablet", "mobile","desktop"]} ssr={true}   >      
                            {skillIcondata.map((icondoc) =>{ 
                              return(
                              
                              <div class="col-sm technologies" >
                                
                                    <img src={icondoc.iconlink} alt="Image"/> 
                             </div>
                                
                               );
                            })}
                      </Carousel>
                           </div>
                           </div> 
                        </div>
                    </div>
                </div>
            </div>
            
        </section>
     
      )

     
    }
  


export default Skill;