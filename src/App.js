import React,{ useState,useEffect } from "react";
import "./index.css";
import Home from "./Routers/Home";
import Project from "./Routers/Project";
import Contact from "./Routers/Contact";
import About from "./Routers/About";
import firebase from "./firebase";
import "firebase/firestore";





import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  const [data, setdata] = useState([]);
  const [footerdata,setfooterdata] = useState([])
  

  useEffect(() => {
    const fetchdata = async () => {
      const db = firebase.firestore();    
      const dbcollection = await db.collection("homepage").get();
      setdata(dbcollection.docs.map((doc) => doc.data()));

      const footer = await db.collection("footer").get();
      setfooterdata(footer.docs.map((doc) => doc.data()));
   
       };
    fetchdata();
  }, []);


  return (
    
    
       <Routes>
       <Route  path="/" element={<Home footerdata={footerdata} />} />
       <Route  path="/project" element = {<Project />}/>
       <Route  path="/about" element = {<About/>}/>
       <Route  path="/contact" element = {<Contact/>}/>
      
     </Routes>
   
    
  );
}

export default App;
