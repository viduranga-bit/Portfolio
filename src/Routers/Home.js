import React from 'react';
import HeroImage from '../Components/HeroImage/HeroImage';
import Project from './Project';
import ProjectCards from '../Components/Project/ProjectCards';
import Skill from '../Components/Skillls/Skill';
import AboutMe from '../Components/AboutMe/AboutMe';

const Home = ({maindata}) => {
  return <div>

  

     <HeroImage/>
     
     <Skill maindata={maindata} />
     <AboutMe maindata={maindata}/>
     <ProjectCards/>
    

  
  </div>;

};

export default Home;