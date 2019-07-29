import React from 'react';
import { Link } from 'react-router-dom';
import logo from './logo.png';

function Footer () {
  return ( 
    <footer className="footer">
        <Link to="/">
          <img
          src={logo}
          width="130"
          height="50"
          className="footer-logo"
          alt="logo"
          />
        </Link>
      critter Sitter Inc.
      Made with lots of 
      <span role="img" aria-label="emoji">☕</span>
       and 
      <span role="img" aria-label="emoji">❤️</span>
      by Nikita, Melanie and Poushita.
    </footer>
  );
}
 
export default Footer;