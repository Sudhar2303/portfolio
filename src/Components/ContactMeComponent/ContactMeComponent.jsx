import React from 'react'
import '../ContactMeComponent/ContantMeComponent.css'
const ContactMeComponent = () => {
  return (
    <React.Fragment>
        <div className='contact-container'>
            <div className='contact-tag'>
                <p><span className='span-hash-color'>Say Hi!</span> and Start a Conversation with Me!</p>
            </div>
            <form action="" className='form-container'>

              <div className='form-group'>
                <label for="name">Name</label>
                <input type="text" id="name" name="name" required />
                <hr />              
              </div>
              <div className='form-group'>
                <label for="email">Email Address</label>
                <input type="email" id="email" name="email" required />
                <hr />              
              </div>
              <div className='form-group'>
                <label for="company">Company Name</label>
                <input type="text" id="company" name="company" />
                <hr />              
              </div>
              <div className='form-group'>
                <label for="message">Message</label>
                <textarea id="message" name="message" rows="4" required></textarea>
                <hr />              
              </div>
                <button type="submit">Submit</button>
            </form>
        </div>
    </React.Fragment>
  )
}

export default ContactMeComponent