import React from 'react'
import { NavLink } from "react-router-dom";
import logo from './logo.svg';

const Navbar = () => {
  return(
    <nav className="navbar">
      <div>
        <img className='App-logo' alt="logo" src={ logo } />
        <NavLink to="/" className="navbar-brand">critterSitter</NavLink>
      </div>
      <ul className="menu">
        <li>
          <NavLink to="/signup">Signup</NavLink>
        </li>
        <li>
          <NavLink to="/login">Login</NavLink>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar;