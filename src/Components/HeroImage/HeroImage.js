import React from 'react'
import IntroImg from "./HeroImg.jpg";
import shape from "../images/shape.png"
import myimage from "../images/my.png"

import "./HeroImage.css";
import Aos from 'aos';
import "aos/dist/aos.css"

const HeroImage = () => {
  return  <div className='hero'>

    <div className='Mask'>
 <img className='intro-img' src={IntroImg} alt="Intro Image"/>
 
 </div>
 
 <div className='images'>
   <img src={shape} className="shape"></img>
   <img src={myimage} className = "myimg"></img>
   </div>
 <div className='content' >
    <p> HI , I'M AMITH VIDURANGA</p>
   <h1>Full Stack Web & <br/> Mobile Developer</h1>
   <h3 className='intro'>"I love designing & design websites and <br/> I am looking for more opportunities to work in coding on a freelance basis"</h3>
 </div>
 
 </div>;


  
};

export default HeroImage;