import React, { useState } from 'react'
import logo from "./logod.png";
import { FaBars, FaTimes } from 'react-icons/fa'
import './navbar.css'



const Navbar = () => {

    const [click, setClick] = useState(false)
    const handleClick = () => setClick(!click)

    const closeMenu = () => setClick(false)

    return (
        <div className='header'>
            <nav className='navbar'>
                <a href='#' className='logo'><h6>ExploreTheWorld</h6>
                    <img src={logo} alt='logo' className='LOGO' />
                </a>

                
                <div className='hamburger' onClick={handleClick}>
                    {click ? (<FaTimes size={30} style={{ color: '#ffffff' }} />)
                        : (<FaBars size={30} style={{ color: '#ffffff' }} />)}

                </div>
                <ul className={click ? "nav-menu active" : "nav-menu"}>
                    <li className='nav-item'>
                        <a href='#' onClick={closeMenu}>Home</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#skills' onClick={closeMenu}>Skills</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#about' onClick={closeMenu}>About</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#projectcard' onClick={closeMenu}>Projects</a>
                    </li>
                    <li className='nav-item'>
                        <a href='#connect' onClick={closeMenu}>Contact Me</a>
                    </li>
                </ul>
            </nav>
        </div>
    );
}

export default Navbar;