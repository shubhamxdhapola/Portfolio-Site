import React, { useRef } from 'react'
import './Portfolio.css'
import { PORTFOLIO } from '../../utils/data.js'
import PortfolioCard from './PortfolioCard/PortfolioCard'
import Slider from 'react-slick'

const Portfolio = () => {

  let sliderRef = useRef()

  const settings = {
    dots : false,
    infinite : true,
    speed : 500,
    slidesToShow : 2,
    slidesToScroll : 2,
    arrows : false,
    responsive : [
      {
        breakpoint : 890,
        settings : {
          slidesToScroll : 1,
          slidesToShow : 1,
        }
      }
    ]
  }

  const slideRight = () => sliderRef.current.slickNext()
  const slideLeft = () => sliderRef.current.slickPrev()

  return (
    <section className='portfolio-container' name="portfolio">
        <h5>Portfolio</h5>
        <div className="portfolio-content">
          <div className="arrow-right" onClick={slideRight}>
            <span className='material-symbols-outlined'>chevron_right</span>
          </div>
          <div className="arrow-left" onClick={slideLeft}>
            <span className='material-symbols-outlined'>chevron_left</span>
          </div>
          
          <Slider ref={sliderRef} {...settings} >
            {PORTFOLIO.map(item => (
              <PortfolioCard 
              key={item.title} details={item}
              />
            ))}
          </Slider>
        </div>

    </section>
  )
}

export default Portfolio
