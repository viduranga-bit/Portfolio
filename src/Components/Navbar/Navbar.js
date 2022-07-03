import React, { useState } from 'react'
import "./navbar.css"
import { Link } from 'react-router-dom';
import {FaBars,FaTimes} from 'react-icons/fa';
import logo from "./logod.png";
export const Navbar = () => {
   
    const [click,setClick] = useState(false);
    const handleClick = () => setClick(!click);

  return (

   
    <div className='header'>
       <Link to ="/">
        <img className='logo' src={logo} alt="Logo"></img>
       
       </Link>
       <ul className={click ? "nav-menu active" : "nav-menu"}>
        <li>
        <Link to ="/">Home</Link> 
        </li>
        <li>
        <Link to ="./project">Projects</Link> 
        </li>
        <li>
        <Link to ="./about">About</Link> 
        </li>
        <li>
        <Link to ="./contact">Contact</Link> 
        </li>
       </ul>

       <div className='hamburger' onClick=
       {handleClick}>
        {click ? (
         <FaTimes size={20} style = {{color : "#fff"}}/>
         ):
        (<FaBars size={20} style = {{color : "#fff"}} />
        )}
      
       </div>
    </div>   
   
  );
};
