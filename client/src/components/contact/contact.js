import './contact.css';
import React from 'react'

export default function Contact(){

    return(
        <div className='maincontact' id='contact'>
            <div className='contact'>
            <form action="https://portfolioo-dupt.onrender.com/contact" method='POST'>
            <h2>Get in Touch</h2>
                <input className='email' type='email' placeholder='Email' required/>
                <textarea className='message' name="message" placeholder="Your message" required/>
                <input className='submit' type='submit' value={"Send"}/>
            </form>
            </div>
        </div>
    )
}
