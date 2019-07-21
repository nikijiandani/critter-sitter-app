import React from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import logo from './logo.svg';

function Navbar() {
  return(
    <nav class="navbar">
      <div>
        <img className='App-logo' alt="logo" src={ logo } />
        <a href="/" className="navbar-brand">critterSitter</a>
      </div>
      <ul className="menu">
        <li>
          <Link to="/signup">Signup</Link>
        </li>
        <li>
          <Link to="/login">Login</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;