import React from 'react'
import {Typewriter} from 'react-simple-typewriter';
import 'react-simple-typewriter/dist/index'

import "./HeroImage.css";



const HeroImage = () => {

  const {text} = Typewriter({
    loop: 0, 
    typeSpeed: 70,
    deleteSpeed: 700,
    delaySpeed: 100
    })

  return  <div className='hero-container'>
  

  <div className='profile-container'>
    <div className='profile-parent'>
      <div className='profile-details'>
        <div className = 'colz'>
        <div className='colz-icon'>
          <a href='#'>
              <i className='fa fa-facebook-squre'></i>
          </a>
          <a href='#'>
              <i className='fa fa-facebook-squre'></i>
          </a>
          <a href='#'>
              <i className='fa fa-facebook-squre'></i>
          </a>
          <a href='#'>
              <i className='fa fa-facebook-squre'></i>
          </a>
        </div>
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
               words={['Enthusiastic DEV ♥️ ','Full Stack Developer', 'Flutter Developer📱', 'Freelancer in Fiver']}
               loop
               cursor
               cursorStyle='_'
               typeSpeed={70}
               deleteSpeed={50}
               delaySpeed={70}
                              />
             </h1>
             <span className='profile-role-tagline'>
            <h4> " I love designing & design websites and <br/> I am looking for more opportunities to work in coding on a freelance basis"
             </h4>
             </span>
            </span>

            
        </div>

        <div className='profile-options'>
       
        <button class="button-85" role="button">Projects</button>
 
        <button class="button-78" role="button">Contact Me</button>
        </div>
      </div>
      <div className='profile-picture'>
        <div className='profile-picture-background'>

        </div>
        
        </div> 
    
  </div>
</div>

 </div>;


  
};

export default HeroImage;