import React from 'react';
import './style.css';
import {
    faYoutube,
   
    faTwitter,
    faInstagram,
    faGoogle,
    faWhatsapp

    
  } from "@fortawesome/free-brands-svg-icons";
  import ReactWhatsapp from 'react-whatsapp';

  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header=props=>{
    return(
        <header className='head'>
           <nav className='Menu'>
           <a href='/'>Home</a>
           <a href='/contact-us'>Contact Us</a>
          
           </nav>
         
           <div className='social-container'>
             <a href="https://www.youtube.com/channel/UC6IRVnOeA9tt8hTtRYPHvxQ"
        className="youtube social">
        <FontAwesomeIcon icon={faYoutube} size="1.5x" />
      </a>
      <a href="https://www.google.com/"
        className="google social">
        <FontAwesomeIcon icon={faGoogle} size="1.5x" />
      </a>
      <a href="https://www.twitter.com/Pratiks19247817" className="twitter social">
        <FontAwesomeIcon icon={faTwitter} size="1.5x" />
      </a>
      <a href="https://www.instagram.com/accounts/onetap/?next=%2Faccounts%2F%40pratiikshapatil"
        className="instagram social">
        <FontAwesomeIcon icon={faInstagram} size="1.5x" />
      </a>
      
          <ReactWhatsapp  className="whatsapp social" number="91-788-742-9993" message="share your thoughts" >
          <FontAwesomeIcon icon={faWhatsapp} size="1x" />
          </ReactWhatsapp>
        
      
      </div>
           
          </header>
    );
}

export default Header;