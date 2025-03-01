import React from 'react'
import './PortfolioCard.css'
import { Radio, CodeXml } from 'lucide-react'


const PortfolioCard = ({details}) => {
  return (
    <div className='portfolio-card'>
        <h6>{details.title}</h6>
        
        {details.techStacks.map((techStack, index) => (
            <div key={index} className='tech-stack'>{techStack}</div>
        ))}

        <ul>
            {details.description.map((item, index) => (
                <li key={index}>{item}</li>
            ))}
        </ul>


        <div className='portfolio-card-btns-container'>        
            <a 
              className='github-btn portfolio-btn' 
              href={details.gitHubUrl} 
              target='_blank'
            >
              Code <CodeXml size={23} className='url-icons'/> 
            </a>

            <a 
              className='view-live-btn portfolio-btn' 
              href={details.liveUrl} 
              target='_blank'
            >
              Live <Radio size={23} className='url-icons'/> 
            </a>
        </div>
    </div>
  )
}

export default PortfolioCard
