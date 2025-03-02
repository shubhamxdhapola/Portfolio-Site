import React from 'react'
import './MobileNav.css'
import { Link } from 'react-scroll'
import { navPages } from '../../../utils/data'

const MobileNav = ({isOpen, toggleMenu}) => {
    return (
    <>
        <div
            className={`mobile-menu ${isOpen ? 'active' : ""}`}
            onClick={toggleMenu}
        >
            <div className='mobile-menu-container'>
                <Link 
                    to='home' smooth={true} duration={500} 
                    className='logo' onClick={toggleMenu}
                >
                    <span style={{fontFamily :"Source Code Pro"}} >&lt; Shubham :D /&gt;</span>
                </Link>
                <ul>
                    {navPages.map((navPage, index) => (
                        <li key={index}>
                            <Link 
                                to={navPage} smooth={true} duration={500} 
                                className='menu-item'
                                onClick={toggleMenu}
                            >
                                <span>{navPage.charAt(0).toUpperCase() + navPage.slice(1)}</span>
                            </Link>
                        </li>
                    ))}
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
