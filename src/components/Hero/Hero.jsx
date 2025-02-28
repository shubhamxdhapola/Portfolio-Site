import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container'>
        <div className='hero-content'>
            <h2 className='cssanimation open'>For me, The <span style={{color : '#7e61e7'}}>C</span> in Coding Stands For Creativity</h2>
            <p>Passionate about technology and driven by curiosity, I am a web developer and software enthusiast pursuing a Bachelor of Computer Applications (BCA). With experience in full-stack development, I specialize in creating efficient, user-friendly applications that solve real-world problems.
            .</p>
        </div>

        <div className='hero-img'>
            <div>
                <div className="tech-icon">
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/react.png" alt="" />
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
                    src="./assets/images/node.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/javascript.png" alt="" />
                </div>
                <div className="tech-icon">
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/github.png" alt="" />
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero
