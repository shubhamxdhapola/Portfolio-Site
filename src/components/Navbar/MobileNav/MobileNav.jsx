import React from 'react'
import './MobileNav.css'
import { Link } from 'react-scroll'


const MobileNav = ({isOpen, toggleMenu}) => {
  return (
    <>
        <div
            className={`mobile-menu ${isOpen ? 'active' : ""}`}
            onClick={toggleMenu}
        >
            <div className='mobile-menu-container'>
                <span className='logo'>&lt; Shubham :D /&gt;</span>
                <ul>
                    <li>
                        <Link to="home" smooth={true} duration={500} onClick={toggleMenu} className='menu-item'>Home</Link>
                    </li>
                    <li>
                        <Link to="skills" smooth={true} duration={500} onClick={toggleMenu} className='menu-item'>Skills</Link>
                    </li>
                    <li >
                        <Link to="portfolio" smooth={true} duration={500} onClick={toggleMenu} className='menu-item'>Portfolio</Link>
                    </li>
                    <li >
                        <Link to="contact" smooth={true} duration={500} onClick={toggleMenu} className='menu-item'>Contact</Link>
                    </li>

                    <a 
                        href='./resume.pdf'
                        className='resume-btn'
                        download={true}
                    > 
                        Download CV
                    </a>
                </ul>

            </div>
        
        </div>
    </>
  )
}

export default MobileNav
