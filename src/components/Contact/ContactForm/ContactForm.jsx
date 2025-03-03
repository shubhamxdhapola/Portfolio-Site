import React, { useState } from 'react'
import './ContactForm.css'
import {toast} from 'react-hot-toast'
import axios from 'axios'

const ContactForm = () => {

  const initFormData = {
    firstName : '',
    lastName : '',
    email : '',
    message : '',
  }

  let [ formData, setFormData ] = useState(initFormData)
  
  const handleOnChange = (e) => {
    setFormData(prevData => (
    {...prevData, [e.target.name] : e.target.value}
  ))}

  const validateForm = () => {
    if(!formData.firstName.trim() ||
      !formData.lastName.trim() || 
      !formData.email.trim() || 
      !formData.message.trim()) { 
        return toast.error('All fields are required!') 
      }
    if(!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)){
      return toast.error('Invalid email format!')
    } 
    return true    
  }

  const handleOnSubmit = (e) => {
    e.preventDefault()
    const success = validateForm()
    if(success === true){
      axios.post(import.meta.env.VITE_FORM_API, formData)
      toast.success("Form submitted successfully!")
      setFormData(initFormData)
    } 
  }

  return (
    <div className='contact-form-content'>
        <form onSubmit={handleOnSubmit}>
            <div className="name-container">
                <input type="text" name='firstName' placeholder="Sender's First Name" 
                value={formData.firstName} onChange={handleOnChange} data-aos="fade-right"/>
                <input type="text" name='lastName' placeholder="Sender's Last Name" 
                value={formData.lastName} onChange={handleOnChange} data-aos="fade-left"/>
            </div>
            <input type="text" name='email' placeholder="Sender's Email " 
            value={formData.email} onChange={handleOnChange} data-aos="fade-left"/>
            <textarea type="text" name="message" placeholder="Leave your message" rows={3} 
            value={formData.message} onChange={handleOnChange} data-aos="fade-right"></textarea>
            <button type='submit' data-aos="fade-up">SUBMIT</button>
        </form>
    </div>
  )
}

export default ContactForm
