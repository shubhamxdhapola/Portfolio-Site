import { useState } from 'react'
import './Navbar.css'
import MobileNav from './MobileNav/MobileNav'
import { Link } from 'react-scroll'
import { X, AlignRight } from 'lucide-react'

const Navbar = () => {

    const [ openMenu, setOpenMenu ] = useState(false)
    const toggleMenu = () => setOpenMenu(!openMenu)

  return (
    <>
    <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
    <nav className='nav-wrapper'>
        <div className='nav-content'>
            <div className="cssanimation typing">
                <span style={{fontFamily :"Source Code Pro"}}>&lt; Shubham :D /&gt;</span>
            </div>
            <ul>
                <li>
                    <Link to="home" smooth={true} duration={500} className='menu-item'>Home</Link>
                </li>
                <li>
                    <Link to="skills" smooth={true} duration={500} className='menu-item'>Skills</Link>
                </li>
                <li>
                    <Link to="portfolio" smooth={true} duration={500} className='menu-item'>Portfolio</Link>
                </li>
                <li>
                    <Link to="contact" smooth={true} duration={500} className='menu-item'>Contact</Link>
                </li>

                <a 
                    href='./resume.pdf'
                    className='resume-btn' onClick={() => {}}
                    download={true}
                >
                 <span>Download CV</span>
                </a>

            </ul>

            <button className='menu-btn' onClick={toggleMenu}>
                {openMenu ? <X /> : <AlignRight />}
            </button>
        </div>
    </nav>
    </>
  )
}

export default Navbar
