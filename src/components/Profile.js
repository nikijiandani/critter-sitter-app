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
      profiles: {
        images: [],
        reviews: []
      },
    }
  }

  componentDidMount() {

    const lookup_id = this.props.match.params.id ? this.props.match.params.id : 0;

    fetch('http://localhost:8080/api/users?id=' + lookup_id)
    .then(results => {
      results.json().then((res) => {
        this.setState({
          profiles: res[0] // individual profile is first result
        });
      })
    })

  }

  handleSubmit = (e) => {
    
    let newReview = {
      from_id: 10,
      to_id: 1,
      rating: 5,
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
                  <p>Average Rating: {this.state.profiles.avg_rating ? this.state.profiles.avg_rating : 'Not Rated Yet'} </p>
              </div>
            </div>
          </div>

          <Carousel className="profile-images">
            {this.state.profiles.images.map((image, index) => {
              return (
                <Carousel.Item key={index}>
                  <img
                    className="d-block w-100"
                    src={image.image}
                    alt="sliding-images-of-user-or-their-pet"
                  />
                </Carousel.Item>
              )
            })}
          </Carousel>

          <Form className="review-form" onSubmit={this.handleSubmit}>
            <Form.Group>
              <Form.Label>Add a Review:</Form.Label>
              <Form.Control as="textarea" />
            </Form.Group>
            <Button variant="primary" type="submit" >Submit</Button>
          </Form>

          <Reviews reviews={this.state.profiles.reviews}/>
        </div>

        <div className="profile-map">
          <h4>{this.state.profiles.first_name}'s Neighbourhood</h4>
          <Map profiles={[this.state.profiles]} profilePageExists={true} zoom={13}/>
        </div>
      </div>
    )
  }
}

export default Profile;