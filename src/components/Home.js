import React from "react";
import { Link } from "react-router-dom";
import BackgroundSlider from "react-background-slider";
import "./styles/home.css";
import bird from "./images/bird.jpg";
import cat from "./images/cat.jpg";
import cat1 from "./images/cat1.jpg";
import dog from "./images/dog.jpg";
import hedgehog from "./images/hedgehog.jpg";
import rabbit from "./images/rabbit.jpg";
import dograbbit from "./images/dog-rabbit.jpg";
import hedgehog2 from "./images/hedgehog2.jpg";

export default function Home() {
  return (
    <div className="home-container">
      <div className="overlay"></div>
      <div className="background-images">
        <BackgroundSlider
          images={[
            bird,
            dograbbit,
            cat,
            hedgehog2,
            dog,
            rabbit,
            cat1,
            hedgehog
          ]}
          duration={8}
          transition={0}
        />
      </div>
      <div className="text-section">
        <h1>Critter Sitter</h1>
        <h3>Search pet sitters near you!</h3>
        <hr />
      </div>
      <div className="options-section">
        {localStorage.getItem("loggedInUsersId") ? (
          parseInt(localStorage.getItem("loggedInUsersId")) === 1 ? (
            <Link to="/search/sitter" className="btn btn-lg btn-info homeBtn">
              Show me Critter Sitters
            </Link>
          ) : (
            <Link to="/search/customer" className="btn btn-lg btn-info homeBtn">
              Show me Critter Owners
            </Link>
          )
        ) : (
          <>
            <Link to="/search/sitter" className="btn btn-lg btn-info homeBtn">
              I need a Sitter
            </Link>
            <Link to="/search/customer" className="btn btn-lg btn-info homeBtn">
              I am a Sitter
            </Link>
          </>
        )}
      </div>
    </div>
  );
}
