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
                    <Link onClick={toggleMenu} to="home" smooth={true} duration={500}>
                        <a  className='menu-item'>Home</a>
                    </Link>
                    <Link onClick={toggleMenu} to="skills" smooth={true} duration={500}>
                        <a  className='menu-item'>Skills</a>
                    </Link>
                    <Link onClick={toggleMenu} to="portfolio" smooth={true} duration={500}>
                        <a  className='menu-item'>Portfolio</a>
                    </Link>
                    <Link onClick={toggleMenu} to="contact" smooth={true} duration={500}>
                        <a  className='menu-item'>Contact</a>
                    </Link>

                    <a 
                        href='./resume.pdf'
                        className='resume-btn' onClick={() => {}}
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
