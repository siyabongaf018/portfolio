import React from 'react'
import { FaEnvelope, FaPhone,FaGithub  } from 'react-icons/fa';

const Footer = () => {
  return (
    // <footer>
    //   <Contact/>
    //     <p>&copy; 2023 Your Name. All rights reserved.</p>
    // </footer>
    // <footer>
    <footer id='#contact'>
    <div className="contact-section">
      <h3>Contact Us</h3>
      <div className="contact-info">
        <p>
          <FaEnvelope /> Email:<a className='links' href = "mailto: siyabongaf018@gmail.com">siyabongaf018@gmail.com</a>  
        </p>
        <p>
          <FaPhone /> Phone:<a className='links' href="tel:+2771 3764 279">+2771 3764 279</a> 
        </p>
        <p><FaGithub /><a className='links'  href="https://github.com/siyabongaf018">Git hub</a></p>
      </div>
      <br></br>
      {/* <p>&copy; 2023 Your Name. All rights reserved.</p> */}
    </div>
  </footer>

  )
}

export default Footer
