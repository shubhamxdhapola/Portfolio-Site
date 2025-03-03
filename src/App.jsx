import './App.css'
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import { Toaster } from 'react-hot-toast'
import { useEffect } from 'react'

import AOS from 'aos'
import 'aos/dist/aos.css'

function App() {

  useEffect(() => {
    AOS.init({
      duration: 1000, 
      once: true,    
      offset :100,
    })
  }, [])

  return (
    <>
      <Toaster />
      <Navbar />
      <div className="container">
        <Hero />
        <Skills />
        <Portfolio />
        <Contact />
      </div>
      <Footer />
    </>
  )
}

export default App