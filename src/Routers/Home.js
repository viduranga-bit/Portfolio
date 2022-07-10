import React from 'react';
import HeroImage from '../Components/HeroImage/HeroImage';
import Project from './Project';
import ProjectCards from '../Components/Project/ProjectCards';
import Skill from '../Components/Skillls/Skill';
import AboutMe from '../Components/AboutMe/AboutMe';
import Contact from '../Components/Contact/Contact'

const Home = ({maindata}) => {
  return <div>

  

     <HeroImage/>
     <Skill maindata={maindata} />
     <AboutMe maindata={maindata}/>
     <ProjectCards/>
     <Contact/>
    

  
  </div>;

};

export default Home;