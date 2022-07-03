import ReactDOM from "react-dom/client";
import React,{ useState,useEffect } from "react";
import "./index.css";
import Home from "./Routers/Home";
import Project from "./Routers/Project";
import Contact from "./Routers/Contact";
import About from "./Routers/About";
import firebase from "./firebase";
import "firebase/firestore";
import {BrowserRouter ,Router, Routes, Route,Link} from "react-router-dom";
import { Navbar } from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";



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
    
     <BrowserRouter>
     <Navbar/>
       <Routes>
       <Route  path="/" element={<Home maindata={maindata} />} />
       <Route  path="#project" element = {<Project />}/>
       <Route  path="#about" element = {<About/>}/>
       <Route  path="#contact" element = {<Contact/>}/>
      
     </Routes>
   <Footer footerdata={footerdata} />
     </BrowserRouter>
    
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
