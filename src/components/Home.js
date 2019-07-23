import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom"; 
import './styles/home.css';


function Home() {
  return (
    <div>
      <div className="text-section">
        <p>Search thousands of pet sitters near you, read reviews and more!!</p>
      </div>
      <div className="options-section">
        <Link to="/search" className="btn btn-lg btn-info myBtn">I need a Critter Sitter</Link>
        <Link to="/search" className="btn btn-lg btn-info myBtn">I am a Critter Sitter</Link>
      </div>
    </div>
  )
}

export default Home;