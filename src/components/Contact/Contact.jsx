import React from 'react'
import './Contact.css'
import ContactInfoCard from './ContactInfoCard/ContactInfoCard'
import ContactForm from './ContactForm/ContactForm'

const Contact = () => {
  return (
    <section className='contact-container' name="contact">
        <h5>Contact Me</h5>
        <div className='contact-content'>
            <div style={{flex : 1}}>
                <ContactInfoCard 
                    iconUrl='fa-solid fa-envelope'
                    text='shubhamdhapola143@gmail.com'
                />
                <ContactInfoCard 
                    iconUrl='fa-solid fa-phone'
                    text='+91 93226 63609'
                />
            </div>
            <div style={{flex : 1}}>
                <ContactForm />
            </div>
        </div>
    </section>
  )
}

export default Contact
