import './App.css'
import Hero from "./components/Hero/Hero"
import Navbar from "./components/Navbar/Navbar"
import Portfolio from './components/Portfolio/Portfolio'
import Skills from './components/Skills/Skills'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <>
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
