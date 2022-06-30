import React from 'react';
import HeroImage from '../Components/HeroImage/HeroImage';
import { Navbar } from '../Components/Navbar/Navbar';
import Footer from '../Components/Footer/Footer';

const Home = ({footerdata}) => {
  return <div>

  
     <Navbar/>
     <HeroImage/>
     <Footer footerdata={footerdata}/>

  
  </div>;

};

export default Home;