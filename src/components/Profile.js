import React, { Component } from 'react';
import { Link } from "react-router-dom"; 
import Map from './Map';
import Reviews from './Reviews';
import './styles/profile.css';
import { Form, Button, Carousel } from 'react-bootstrap';




class Profile extends Component {
  constructor() {
    super()
    this.state = {
      profiles:
        { 
          id: 1,
          first_name: "Dudley",
          last_name: "Maggio",
          location: "500 Kingston Rd, ON M4L 1V3", 
          num_of_ratings: 2,
          avatar: "https://api.adorable.io/avatars/111/Dudley5@gmail.com.png",
          images: ["http://hsmo.zurihosting.com/wp-content/uploads/2016/06/Pebbles2-A608071a.jpg", "https://www.condorferries.co.uk/media/2455/taking-your-pet-5.jpg", "https://www.inquirer.com/resizer/iI306f5uOeqNIdt9yTnwaQE583I=/1400x932/smart/arc-anglerfish-arc2-prod-pmn.s3.amazonaws.com/public/KRGVV5DRABH3BPHJWDFSICAEVA.jpg"],
          home_coords:[-79.3049261, 43.6779947]
        },
      reviews: []
    }    
  }

  componentDidMount() {
    fetch(`http://localhost:8080/api/reviews?profile_id=${this.state.profiles.id}`)
    .then(results => {
      results.json().then((res) => {
        console.log(res)
        this.setState({
          reviews: res
        });
      })
    })
  }

  handleSubmit = (e) => {
    let profile_id = this.state.profiles.id
    let newReview = {
      from_id: 10,
      to_id: profile_id,
      content: e.target.elements[0].value
    };
    e.preventDefault();
    e.target.elements[0].value = ""
    fetch('http://localhost:8080/api/reviews', {
      method: 'POST',
      mode: 'cors',
      credentials: 'omit',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newReview)
    })
    .then(res => res.json())
    .then((response) => console.log("Success:", JSON.stringify(response)))
    .catch(error => console.log('Error:', error))
  }

  render() {
    return (
      <div className="profile-container">
        <div className="profile-left">
          <div className="profile-header">

            <div className="profile-avatar">
                <img src={this.state.profiles.avatar} alt="avatar" />
            </div>

            <div className="profile-text">
              <div className="profile-name">    
                  <h3>{this.state.profiles.first_name} {this.state.profiles.last_name}</h3>
                  <Link to="/profile/:id/contact" className="btn btn-info">Contact</Link>
              </div>
              <div className="profile-info">
                  <h6>{this.state.profiles.location}</h6>
                  <p>Number of Ratings: {this.state.reviews.length}</p>
              </div>
            </div>
          </div>

          <Carousel className="profile-images">
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.state.profiles.images[0]}
                alt="First slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.state.profiles.images[1]}
                alt="Third slide"
              />
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                src={this.state.profiles.images[2]}
                alt="Third slide"
              />
            </Carousel.Item>
          </Carousel>
          
          <Form className="review-form" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Add a Review:</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>
            <Button variant="primary" type="submit" >Submit</Button>
          </Form>

          <Reviews reviews={this.state.reviews}/>
        </div>

        <div className="profile-map">
          <h4>{this.state.profiles.first_name}'s Neighbourhood</h4>
          <Map profiles={[this.state.profiles]} />
        </div>
      </div>
    )
  }  
}

export default Profile;