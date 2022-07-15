import React from 'react'
import {Typewriter} from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'
import { useState } from 'react';
import "./HeroImage.css";
import profileImage from "../../assests/my.png"




const HeroImage = (props) => {

  const [click, setClick] = useState(false)
  const handleClick = () => setClick(!click)
  const closeMenu = () => setClick(false);
  

  const {text} = Typewriter({
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 700,
    delaySpeed: 100
    })

  return  <div className='hero-container'>
  

  <div className='profile-container'>

    <div className='container cssedit'>
    <div className='profile-parent'>
      <div className='profile-details'>
        <div className = 'colz'>
      

       </div>
        <div className='profile-details-name'>
   
          <span className='primary-text'>
               {" "}
               Hi, I'M  <span className='highlighted-text'>Amith viduranga</span>
          </span>
        </div>

        <div className='profile-details-role'>
          <span className='primary-text'>
          <h1>
          <Typewriter
               words={['Enthusiastic DEV ♥️ ','Full Stack Developer', 'Flutter Developer📱', 'Freelancer in Fiverr']}
               loop
               cursor
               cursorStyle='_'
               typeSpeed={70}
               deleteSpeed={50}
               delaySpeed={70}
                              />
             </h1>
             <span className='profile-role-tagline'>
            <h5>  I am looking for more opportunities to work in coding on a freelance basis<br/>Currently i'm a student undergraduate at University Of Peradeniya through BSc. (hons) Computer Science </h5>
             </span>
            </span>

            
        </div>

        <div className='profile-options'>
       
        <a href='#projectcard' onClick={closeMenu}  class="button-87" role="button">projects</a>
 
        <a href='#connect' onClick={closeMenu} class="button-87">Contact me</a>
        </div>
      </div>
    
        <div className='profile-picture-background'>

       
        
        </div> 
    
  </div>

  </div>
</div>

 </div>;


  
};

export default HeroImage;