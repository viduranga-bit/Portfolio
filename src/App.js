import React from "react";
import "./index.css";
import Home from "./Routers/Home";
import Project from "./Routers/Project";
import Contact from "./Routers/Contact";
import About from "./Routers/About";

import {BrowserRouter as Router, Routes, Route} from "react-router-dom";

function App() {
  return (
    
    
      
     <Routes>
       <Route  path="/" element={<Home />} />
       <Route  path="/project" element = {<Project />}/>
       <Route  path="/about" element = {<About/>}/>
       <Route  path="/contact" element = {<Contact/>}/>
       
     </Routes>
     
   
  );
}

export default App;
