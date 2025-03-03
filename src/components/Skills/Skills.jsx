import './Skills.css'
import { SKILLS } from '../../utils/data.js'
import SkillCard from './SkillCard/SkillCard'
import { useState } from 'react'
import SkillsInfoCard from './SkillsInfoCard/SkillsInfoCard.jsx'

const Skills = () => {

  const [selectedSkill, setSelectedSkill] = useState(SKILLS[0])
  const handleSelectSkill = (data) => setSelectedSkill(data)

  return (
    <section className='skills-container' name="skills">
      <h5 className='page-heading' >Technical Proficiency</h5>
      <p className='page-sub-heading' >These are the technologies I've worked with</p>

      <div className='skills-content'>
        <div className='skills'>
          {SKILLS.map((item) => (
            <SkillCard 
              key={item.title}
              iconUrl={item.icon}
              title={item.title}
              isActive={selectedSkill.title === item.title}
              onClick={() => {
                handleSelectSkill(item)
              }}
            />
          ))}
        </div>
        <div className='skills-info'>
          <SkillsInfoCard 
            heading={selectedSkill.title}
            skills={selectedSkill.skills}
          />
        </div>
      </div>

    </section>
  )
}

export default Skills
