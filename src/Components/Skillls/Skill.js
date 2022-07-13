import meter1 from "../../assests/meter1.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import "./skill.css";
import React, { useEffect, useState } from 'react'
import firebase from "../../firebase";
import "firebase/firestore";


const Skill = () => {

    const [skilldata,setskilldata] = useState([])
  
  useEffect(() => {
    const fetchdata = async () => {
      const db = firebase.firestore();

      const skills = await db.collection("skills").get();
      setskilldata(skills.docs.map((doc) => doc.data()));
   
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
     
      return (
        <section className="skill" id="skills">
            <div className="container ">
                <div className="row">
                    <div className="col-12 ">
                        <div className="skill-bx wow zoomIn ">
                            <h2>Skills</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                            
                         

                          
                            <Carousel responsive={responsive} autoPlay={true} autoPlaySpeed={1500} infinite={true} removeArrowOnDeviceType={["tablet", "mobile"]} ssr={true} className="owl-carousel owl-theme skill-slider">
                            {skilldata.map((doc ,index) =>{
                              return(
                                <div className="item"  key={doc.id}>
                                    <img src={meter1} alt="Image" />
                                    <h5>{doc.image}</h5>
                                    <h6>I started learning Computer Science as a part of my degree program and then I start learning Web and Mobile Developing</h6>
                                    <h5>Web Development</h5>
                                    <h6>I started learning Computer Science as a part of my degree program and then I start learning Web and Mobile Developing</h6>
                                </div>
                               
                               );
                            })}
                            </Carousel>
              

                        </div>
                    </div>
                </div>
            </div>
            
        </section>
     
      )

     
    }
  


export default Skill;