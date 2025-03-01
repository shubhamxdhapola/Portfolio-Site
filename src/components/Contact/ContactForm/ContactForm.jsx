import React from 'react'
import './ContactForm.css'

const ContactForm = () => {


  return (
    <div className='contact-form-content'>
        <form action={import.meta.env.VITE_FORM_API} method='POST'>
            <div className="name-container">
                <input type="text" name='firstName' placeholder="Sender's First Name" />
                <input type="text" name='lastName' placeholder="Sender's Last Name" />
            </div>
            <input type="email" name='email' placeholder="Sender's Email"  />
            <textarea type="text" name="message" placeholder="Leave your message" rows={3}></textarea>
            <button type='submit'>SEND</button>
        </form>
    </div>
  )
}

export default ContactForm
