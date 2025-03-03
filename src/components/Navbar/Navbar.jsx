import './Navbar.css'
import { useState } from 'react'
import MobileNav from './MobileNav/MobileNav'
import { Link } from 'react-scroll'
import { X, AlignRight } from 'lucide-react'
import { navPages } from '../../utils/data.js'

const Navbar = () => {

    const [ openMenu, setOpenMenu ] = useState(false)
    const toggleMenu = () => setOpenMenu(!openMenu)

    return (
    <>
        <MobileNav isOpen={openMenu} toggleMenu={toggleMenu} />
        <nav className='nav-wrapper'>
            <div className='nav-content'>
                <Link  
                    to='home' smooth={true} duration={500} 
                    className='logo'
                    data-aos="fade-down"
                >
                    <span style={{fontFamily :"Source Code Pro"}} >&lt; Shubham :D /&gt;</span>
                </Link>
            
                <ul data-aos="fade-down">
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
                    <span>Download CV</span>
                    </a>
                </ul>
                <button className='menu-btn' onClick={toggleMenu} data-aos="fade-down">
                    <span>{openMenu ? <X /> : <AlignRight />}</span>
                </button>
            </div>
        </nav>
    </>
    )
}

export default Navbar
