import ReactDOM from "react-dom/client";
import React,{ useState,useEffect } from "react";
import "./index.css";
import firebase from "./firebase";
import "firebase/firestore";
import {BrowserRouter ,Router, Routes, Route,Link} from "react-router-dom";
import  Navbar  from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import HeroImage from './Components/HeroImage/HeroImage';
import ProjectCards from './Components/Project/ProjectCards';
import Skill from './Components/Skillls/Skill';
import AboutMe from './Components/AboutMe/AboutMe';
import Contact from './Components/Contact/Contact';



export default function App() {
  const [data, setdata] = useState([]);
  const [footerdata,setfooterdata] = useState([]);
  const [maindata,setmaindata] = useState([]) 

  useEffect(() => {
    const fetchdata = async () => {
      const db = firebase.firestore();    
      const dbcollection = await db.collection("homepage").get();
      setdata(dbcollection.docs.map((doc) => doc.data()));

      const footer = await db.collection("footer").get();
      setfooterdata(footer.docs.map((doc) => doc.data()));

      const mainData = await db.collection("mainData").get();
      setmaindata(mainData.docs.map((doc) => doc.data()));
   
       };
    fetchdata();
    }, []);


  return (
    
     <div>

     <Navbar/>
     <HeroImage maindata={maindata}/>
     <Skill maindata={maindata} />
     <AboutMe maindata={maindata}/>
     <ProjectCards/>
     <Contact/>
     <Footer footerdata={footerdata}/>
     
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App/>);
