import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom"; 
import './styles/home.css';


class Home extends Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <div>
        <div className="text-section">
          <h2>Search thousands of pet sitters near you, read reviews and more!!</h2>
        </div>
        <div className="options-section">
          <Link to="/search" className="btn btn-lg btn-info">I need a Critter Sitter</Link>
          <Link to="/search" className="btn btn-lg btn-info">I am a Critter Sitter</Link>
        </div>
      </div>
    )
  }
}

export default Home;