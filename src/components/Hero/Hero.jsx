import './Hero.css'
import { SOCIAL_HANDLES } from '../../utils/data.js'

const Hero = () => {
  return (
    <section className='hero-container' name="home">
        <div className='hero-content'>
            <h2 className='cssanimation open'>My <span style={{color : '#8064e8'}}>Code</span> Never Bugs, It Just Develops Unexpected Features</h2>
            <p>I’m a full-stack developer skilled in the MERN stack, passionate about building clean, efficient, and user-centric web applications.</p>

            <div className="social-media-handles">
                {SOCIAL_HANDLES.map(({socialHandleUrl, iconUrl}, index) => (
                    <a key={index} href={socialHandleUrl} target="_blank">
                        <i className={iconUrl}i></i>
                    </a>
                ))}
            </div>
        </div>

        <div className='hero-img'>
            <div>
                <div className="tech-icon" href='mailto:shubhamdhapola143@gmail.com'>
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/mongodb.png" alt="" />
                </div>
                <img 
                    className="cssanimation main-img-anim"
                    src="./assets/images/heroImage.jpg" 
                    alt="" 
                />
            </div>
            <div>
                <div className="tech-icon">
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/express.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/react.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/node.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
