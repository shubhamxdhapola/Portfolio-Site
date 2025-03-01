import './Hero.css'

const Hero = () => {
  return (
    <section className='hero-container' name="home">
        <div className='hero-content'>
            <h2 className='cssanimation open'>For me, The <span style={{color : '#7e61e7'}}>C</span> in Coding Stands For Creativity</h2>
            <p>Passionate about technology and driven by curiosity, I am a web developer and software enthusiast pursuing a Bachelor of Computer Applications (BCA). With experience in full-stack development, I specialize in creating efficient, user-friendly applications that solve real-world problems.
            .</p>
        </div>

        <div className='hero-img'>
            <div>
                <a className="tech-icon" href='mailto:shubhamdhapola143@gmail.com'>
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/gmail.png" alt="" />
                </a>
                <img 
                    className="cssanimation main-img-anim"
                    src="./assets/images/heroImage.jpg" 
                    alt="" 
                />
            </div>
            <div>
                <a className="tech-icon" href='https://www.linkedin.com/in/shubhamdhapola/' target='_blank'>
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/linkedin.png" alt="" />
                </a>
                <a className="tech-icon" href='https://www.instagram.com/iamparanoid__/' target='_blank'>
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/instagram.png" alt="" />
                </a>
                <a className="tech-icon" href='https://github.com/shubhamxdhapola' target='_blank'>
                    <img 
                    className='cssanimation icons-anim'
                    src="./assets/images/github.png" alt="" />
                </a>
            </div>
        </div>
    </section>
  )
}

export default Hero
