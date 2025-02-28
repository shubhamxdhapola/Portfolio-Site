import React from 'react'
import './MobileNav.css'

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
                        <a className='menu-item'>Home</a>
                    </li>
                    <li>
                        <a className='menu-item'>Skills</a>
                    </li>
                    <li>
                        <a className='menu-item'>Portfolio</a>
                    </li>
                    <li>
                        <a className='menu-item'>Contact</a>
                    </li>

                    <button className='resume-btn' onClick={() => {}}>
                        Download CV
                    </button>
                </ul>

            </div>
        
        </div>
    </>
  )
}

export default MobileNav
