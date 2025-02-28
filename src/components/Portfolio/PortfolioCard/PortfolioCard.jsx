import React from 'react'
import './PortfolioCard.css'

const PortfolioCard = ({details}) => {
  return (
    <div className='portfolio-card'>
        <h6>{details.title}</h6>
        <div className='portfolio-duration'>{details.date}</div>

        <ul>
            {details.description.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
      
    </div>
  )
}

export default PortfolioCard
