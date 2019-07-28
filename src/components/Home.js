import React from 'react';
import { Component } from 'react';
import { Link } from "react-router-dom"; 
import './styles/home.css';

class Home extends Component {
  render() {  
    return (
      <div>

          {/* <Carousel className="home-background-images">
            {this.state.profiles.images.map((image, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.image}
                    alt="sliding-images-of-cute-pets"
                  />
                </Carousel.Item>
              )
            })}
          </Carousel> */}


        <div className="text-section">
          <p>Search thousands of pet sitters near you, read reviews and more!!</p>
        </div>
        <div className="options-section">
          <Link to="/search/sitter" className="btn btn-lg btn-info myBtn" >I need a Critter Sitter</Link>
          <Link to="/search/customer" className="btn btn-lg btn-info myBtn">I am a Critter Sitter</Link>
        </div>
      </div>
    )
  }
}

export default Home;